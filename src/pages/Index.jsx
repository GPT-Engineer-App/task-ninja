import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack, HStack, IconButton, Spacer, Checkbox } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <HStack mb={8}>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a todo" />
        <Button onClick={handleAddTodo} colorScheme="blue" leftIcon={<FaPlus />}>
          Add
        </Button>
      </HStack>
      <VStack align="stretch" spacing={4}>
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(index)} />
            <Text textDecoration={todo.completed ? "line-through" : "none"} flexGrow={1}>
              {todo.text}
            </Text>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} size="sm" variant="ghost" colorScheme="red" />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
