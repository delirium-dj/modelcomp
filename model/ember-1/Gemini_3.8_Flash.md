# Ember 1 — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Ember 1 (Fireworks AI)
- **Model Type:** Token-thrifty MoE post-trained reasoning model specialized for agentic coding loops

---

### Executive Summary

Ember 1 is Fireworks AI's specialized reasoning model released on September 23, 2026, built via targeted post-training on Moonshot AI's 2.78 Trillion parameter Kimi K3 Mixture-of-Experts architecture. While frontier reasoning models frequently expend 80%–90% of their generated tokens on redundant hidden internal monologues and circular verification loops, Ember 1 is specifically optimized to distill reasoning traces—achieving a ~39% reduction in total generated tokens (and a ~71.3% reduction in reasoning-token verbosity) without degrading solution accuracy.

Equipped with an expansive 1,048,576-token (~1M) context window, 131,000 output tokens, and native multimodal input (text and images), Ember 1 achieves 82.0% on Terminal-Bench 2.1, 75.2% on DeepSWE 1.1, 92.2% on SWE-bench Verified, and 66.0% on Tau-2 Airline. Priced on Fireworks Serverless at $3.00 per million input tokens, $0.30 per million cached tokens, and $15.00 per million output tokens, Ember 1 drastically lowers the cumulative cost of multi-turn autonomous coding agents where historical reasoning traces compound quadratically over extended sessions.

---

### Quantitative Evaluation

- **Tool use: 89/100.** Scores 82.0% on Terminal-Bench 2.1 and 66.0% on Tau-2 Airline. Accomplishes multi-turn command execution with ~10% fewer overall agent steps (averaging 21.4 steps vs 23.8 for base Kimi K3) and high schema discipline.
- **Reasoning: 91/100.** High-fidelity mathematical and algorithmic reasoning that eliminates verbose circular self-doubt traces while maintaining parity with K3 Max across rigorous logic benchmarks.
- **Context window: 98/100.** Features a native 1,048,576-token context window with up to 131K output capacity. Needle-in-a-haystack retrieval remains pristine across massive codebase imports and long-horizon chat logs.
- **Multimodal: 84/100.** Native text and image understanding for diagrams, charts, and UI mockups; lacks native audio and video stream tokens.
- **Coding: 91/100.** Reaches 92.2% on SWE-bench Verified and 75.2% on DeepSWE 1.1. Excels at autonomous bug fixing, test harness integration, and multi-file code editing with significantly reduced token latency.
- **Cost efficiency: 94/100.** List pricing at $3.00/$15.00 per 1M tokens with $0.30/1M cache hits. Real-world effective cost is ~40% lower due to the dramatic reduction in redundant reasoning tokens per agent step.
- **Overall Score: 91/100.** (Arithmetic mean: `(89 + 91 + 98 + 84 + 91) / 5 = 453 / 5 = 90.6`, rounded to **91**).

---

### Key Strengths

1. **Thrifty Token Economics:** Reduces output tokens by ~39% and reasoning verbosity by ~71.3% per task, preventing context ballooning in multi-turn agent loops.
2. **Superior Agentic Benchmarks:** 82.0% on Terminal-Bench 2.1 and 75.2% on DeepSWE 1.1 place it among the top performers for autonomous CLI and software tasks.
3. **True 1M Native Context:** 1,048,576 tokens allow massive codebases and enterprise documentation libraries to be ingested seamlessly.
4. **Faster Autonomous Turns:** Trimming unnecessary chain-of-thought tokens drastically improves time-to-completion in automated coding environments.

---

### Trade-offs & Limitations

1. **Complex Proof Nuance:** On extreme open-ended mathematical theorem proving, aggressive pruning of exploratory reasoning paths can occasionally hinder fringe edge-case discovery.
2. **Nominal Output List Price:** While effective token spend is reduced by ~40%, nominal output pricing remains at $15.00/1M tokens.
3. **Text/Vision Modalities Only:** Supports images and text/code inputs without native voice/speech generation.

---

### Pricing & Value Matrix

- **Input Price:** $3.00 per million tokens
- **Cached Input Price:** $0.30 per million tokens (90% discount)
- **Output Price:** $15.00 per million tokens
- **Context Capacity:** 1,048,576 tokens (up to 131,000 output tokens)
- **Speed Tier:** Fast reasoning / Token-thrifty agent tier

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **Terminal-Bench 2.1** | 82.0% | Multi-turn CLI & shell execution |
| **DeepSWE 1.1** | 75.2% | Repository-level software engineering |
| **SWE-bench Verified** | 92.2% | Verified multi-file bug fixing benchmark |
| **$\tau$-2 Bench Airline** | 66.0% | Agentic customer workflow & tool use |
| **Token Reduction** | ~39% Total | ~71.3% reduction in reasoning tokens per task |

---

### Evaluation Sources

- Fireworks AI Official Research Announcement: [Ember-1 Architecture & Token Distillation](https://fireworks.ai)
- Developer Technical Community Analysis: [Fireworks Ember 1 Production A/B Testing](https://dev.to)
- Independent Benchmark Disclosures: [Terminal-Bench & DeepSWE Leaderboard Tracking](https://traictory.com)
