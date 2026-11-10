# Fledge Alpha — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Fledge Alpha (`opencode/fledge-alpha`, `opencode/fledge-alpha-free`)
- **Model Type:** Anonymous experimental multimodal preview model linked to Thinking Machines Lab's Inkling MoE project

---

### Executive Summary

Fledge Alpha (`opencode/fledge-alpha-free`) is an anonymous preview model hosted on the OpenCode Zen gateway since October 1, 2026. Architectural tracing and community repository dissections link Fledge Alpha to Thinking Machines Lab's Inkling ecosystem (a multimodal Mixture-of-Experts architecture developed under Mira Murati's team and integrated with their Tinker fine-tuning infrastructure). Featuring an expansive 1,048,576-token (~1M) context window, 131,072 output tokens, native tool calling, and three configurable reasoning effort tiers (`Low`, `High`, `Max`), Fledge Alpha serves as an active preview and evaluation testbed.

Operating as a 100% free ($0.00 in/out) endpoint in exchange for user interaction telemetry and training data collection, Fledge Alpha achieves 74.0/100 on StealthMark Spatial/Reasoning benchmarks. While lacking formal closed-ended SWE-bench verification scorecards, it delivers fast, highly responsive code generation, terminal tool orchestration, and screenshot inspection for non-sensitive experimental workflows.

---

### Quantitative Evaluation

- **Tool use: 68/100.** Supports function calling, structured JSON output, and command-line agent loops in the OpenCode CLI/TUI. Handles single-turn and short-chain executions reliably, though complex multi-step error recoveries show occasional parameter drift.
- **Reasoning: 75/100.** Scores 74.0/100 on StealthMark evaluations. Configurable reasoning effort tiers (`Low`, `High`, `Max`) adjust internal thinking compute effectively for algorithmic reasoning and architectural design.
- **Context window: 90/100.** Expansive 1,048,576-token context window with up to 131K output capacity. Handles extensive multi-file repositories and technical specifications with solid retrieval consistency.
- **Multimodal: 70/100.** Native text and image inputs allow parsing of UI screenshots, architecture diagrams, and mockups; lacks audio/voice and video streaming tokens.
- **Coding: 70/100.** Fast and competent for interactive coding assistance, module refactoring, boilerplate generation, and debugging inside developer agent loops.
- **Cost efficiency: 98/100.** $0.00 / 1M prompt and completion tokens during the active OpenCode Zen promotional preview.
- **Overall Score: 75/100.** (Arithmetic mean: `(68 + 75 + 90 + 70 + 70) / 5 = 373 / 5 = 74.6`, rounded to **75**).

---

### Key Strengths

1. **Free 1M Context Window:** Unrestricted $0.00 access to a 1,048,576-token context window with generous 131K output limits.
2. **Thinking Machines Lab Heritage:** Incorporates architectural elements from Inkling MoE with dynamically controllable reasoning effort tiers.
3. **Responsive Generation Velocity:** Highly responsive interactive coding and prototyping inside terminal IDEs.
4. **Native Image Ingestion:** Easily inspects screenshots and layout diagrams during web app development.

---

### Trade-offs & Limitations

1. **Data Training Retention:** Prompts and interaction histories are collected by the platform to train and refine future iterations; unsuited for sensitive proprietary intellectual property.
2. **No Formal Standard Benchmarks:** Lacks formal third-party SWE-bench Verified or Terminal-Bench leaderboards.
3. **Endpoint Longevity:** As an experimental preview tier, endpoint stability and long-term availability remain subject to sudden changes or retirement.

---

### Pricing & Value Matrix

- **Input Price:** $0.00 per million tokens (Free Zen preview)
- **Output Price:** $0.00 per million tokens (Free Zen preview)
- **Context Capacity:** 1,048,576 tokens (up to 131,072 output tokens)
- **Reasoning Effort:** 3 Tiers (Low, High, Max)
- **Privacy Notice:** Prompts may be retained for model training

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **StealthMark Spatial/Reasoning** | 74.0 / 100 | Max reasoning effort tier |
| **Context Window** | 1,048,576 tokens | 1M input / 131K max output tokens |
| **Tool Calling** | Native | OpenCode CLI/TUI agent integration |
| **Pricing Tier** | Free ($0.00) | OpenCode Zen promotional testbed |

---

### Evaluation Sources

- OpenCode Zen Gateway Specs: [Fledge Alpha Model Card & Endpoints](https://opencode.school)
- Thinking Machines Lab Community Dissections: [Inkling & Tinker Ecosystem](https://thinkingmachines.ai)
- Developer Technical Testing & Benchmarks: [Stealth Models Tracking](https://models.dev)
