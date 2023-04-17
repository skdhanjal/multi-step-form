import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type UserFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};
export function AccountForm({ email, password, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="Account Form">
      <label htmlFor="">Email</label>
      <input
        type="email"
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
