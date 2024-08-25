import { v } from '@bshg/validation';

type Profile = {
  name: string;
  age: number;
};

type User = {
  username: string;
  email: string;
  profile: Profile;
};

const emails = ['example@mail.com'];

const userValidator = v.validator<User>({
  id: 'validator',
  items: {
    email: v.string().required().email().onError({
      error: (value) => !emails.includes(value),
      message: 'unexpected email',
    }),
    username: v.string().notEmpty().alphanumeric(),
    profile: v.costume<Profile>().onError({
      error: (value) => value.age < 18,
      message: 'too young',
    }).onError({
      error: (value) => value.age > 100,
      message: 'too old',
    }),
  },
});

describe('User Validator', () => {
  it('should validate a correct user', () => {
    const res = userValidator.validate({
      email: 'example@mail.com',
      username: 'testuser',
      profile: {
        name: 'test',
        age: 25,
      },
    });

    expect(res).toBe(true);
  });

  it('should invalidate an incorrect email', () => {
    const res = userValidator.validate({
      email: 'wrong@mail.com',
      username: 'testuser',
      profile: {
        name: 'test',
        age: 25,
      },
    });

    expect(res).toBe(false);
  });

  it('should invalidate an empty username', () => {
    const res = userValidator.validate({
      email: 'example@mail.com',
      username: '',
      profile: {
        name: 'test',
        age: 25,
      },
    });

    expect(res).toBe(false);
  });

  it('should invalidate an underage user', () => {
    const res = userValidator.validate({
      email: 'example@mail.com',
      username: 'testuser',
      profile: {
        name: 'test',
        age: 16,
      },
    });

    expect(res).toBe(false);
  });

  it('should invalidate an overage user', () => {
    const res = userValidator.validate({
      email: 'example@mail.com',
      username: 'testuser',
      profile: {
        name: 'test',
        age: 105,
      },
    });

    expect(res).toBe(false);
  });
});
