import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.2.7.min.js"

const {button, div, pre, a} = van.tags

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Run = (sleepMs: number) => {
  const steps = van.state(0)
  ;(async () => { for (; steps.val < 40; ++steps.val) await sleep(sleepMs) })()
  return pre(() => `${" ".repeat(40 - steps.val)}🚐💨Hello VanJS!${"_".repeat(steps.val)}`)
}

const Hello = () => {
  const dom = div()
  return div(
    dom,
    button({onclick: () => van.add(dom, Run({sleepMs: 2000}))}, "Hello 🐌"),
    button({onclick: () => van.add(dom, Run({sleepMs: 500}))}, "Hello 🐢"),
    button({onclick: () => van.add(dom, Run({sleepMs: 100}))}, "Hello 🚶‍♂️"),
    button({onclick: () => van.add(dom, Run({sleepMs: 10}))}, "Hello 🏎️"),
    button({onclick: () => van.add(dom, Run({sleepMs: 2}))}, "Hello 🚀"),
  )
}

const StaticDom = () => {
  const dom = div(
    div(
      button("Dummy Button"),
      button(
        {onclick: () =>
          van.add(dom,
            div(button("New Button")),
            div(a({href: "https://www.example.com/"}, "This is a link")),
          )
        },
        "Button to Add More Elements"),
      button({onclick: () => alert("Hello from 🍦VanJS")}, "Hello"),
    ),
  )
  return dom
}


van.add(document.body, StaticDom())
