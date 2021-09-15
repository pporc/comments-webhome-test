import { Form, Button, Input } from "antd";

export const Editor = ({ onChange, onSubmit, submitting, value, name }) => {
  return (
    <Form>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input onChange={onChange} name="name" value={name} />
      </Form.Item>
      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please input your message!" }]}
      >
        <Input.TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </Form>
  );
};
