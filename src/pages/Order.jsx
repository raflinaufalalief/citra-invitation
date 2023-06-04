import { Select, Button, ButtonGroup } from "@chakra-ui/react"

const Order = () => {
  return (
    <div className=" w-full py-[200px] h-screen ">
      <div className="">
        <h1 className="text-3xl font-bold text-center">Order Sekarang</h1>
        <div className="flex justify-center">
          <div className=" mt-[50px] w-[350px] space-y-8">
            <Select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <button className="w-full py-2 rounded-lg bg-accent">
              <a
                href="https://wa.me/6285648355728?text=Bang%20Order"
                className="text-white"
              >
                Order Sekarang
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
