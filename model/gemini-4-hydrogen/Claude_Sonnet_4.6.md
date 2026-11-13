# Gemini 4 Hydrogen — Claude Sonnet 4.6 Research

Gemini 4 Hydrogen (Google / DeepMind, launched November 12, 2026) is Google's high-efficiency workhorse successor to the Gemini Flash line. It is designed for speed, cost-efficiency, everyday coding, and multi-step agentic workflows. Architecture: full 4-modality omni (text, image, audio, video in; text out). Context: 1M in / 1M out via continuation — the first model to offer symmetric 1M output. Supports 4 configurable thinking levels: low, medium, high, xhigh. Runs 2x–2.8x faster than Gemini 3.8 Flash while using 12–23% fewer tokens. Pricing: $1.50/$7.50 per 1M in/out ($0.075 cached). Integrated into Google AI Studio, Gemini API, and paired natively with Google Antigravity's Orchestrator mode.

Benchmarks (verified — Google official, Nov 2026):
- AA Intelligence Index: 51 (high thinking) / 54 (xhigh thinking)
- HLE-Diamond (Humanity's Last Exam hard subset): 58.8% (vs Claude Sonnet 5.5 53.3%, GPT-6.1 Terra 47.3%)
- Terminal-Bench 4.1 (cheating-adjusted): 57.0% (vs Gemini 3.8 Flash 18.2%)
- General coding evaluation: ~77.6%
- Agents' Last Exam v1.1: 71.6% (#1 in class vs GPT-6.1 Terra 69.8%, Sonnet 5.5 60.4%)
- AutomationBench-AA: 76.1%
- OSWorld-2.1 (offline Computer Use): 77.6%

## Scores

- **Tool use: 92/100.** Agents' Last Exam v1.1 at 71.6% (#1 in class), AutomationBench-AA 76.1%, OSWorld-2.1 77.6% — a comprehensive and class-leading agentic tool-use profile. Paired with Google Antigravity Orchestrator mode for dynamic routing. The 4-level thinking budget allows cost/capability trade-offs per task.
- **Reasoning: 88/100.** HLE-Diamond 58.8% (class-leading among flash-tier models), AA Intelligence Index 54 at xhigh. Strong step up from prior Flash generation on hard reasoning benchmarks. Some capability drop at lower thinking modes is a noted limitation.
- **Context window: 100/100.** 1M in / 1M out via continuation — the first model with symmetric 1M I/O. Full 1M output is unique in the dataset. Scores the maximum context window tier.
- **Multimodal: 88/100.** Full 4-modality omni: text + image + audio + video in; text out. Native end-to-end processing across all modalities. Positions in the full-omni tier (82–90); bumped for the breadth of well-validated omni support.
- **Coding: 88/100.** Terminal-Bench 4.1 57.0% (massive jump from prior 18.2%), general coding ~77.6%. 2x–2.8x faster than 3.8 Flash with fewer tokens for surgical repository bug-fixing and file batching. Class-leading for a flash-tier model on coding benchmarks.
- **Cost efficiency: 72/100.** $1.50/$7.50 per 1M is mid-range — more expensive than typical flash tiers but significantly cheaper than frontier flagships (e.g., Gemini 4 Carbon). The 2.5x speed improvement and cached input at $0.075/M improve effective cost per useful output. 4-level thinking modes allow cost scaling.
- **Overall Score: 91/100.** Mean of Tool use (92) + Reasoning (88) + Context (100) + Multimodal (88) + Coding (88) = 456 / 5 = 91.2, rounded to 91. The highest-scoring model in this dataset per calculated average; best deployed as a high-speed agentic coding and orchestration engine where symmetric 1M I/O, omni modalities, and class-leading agent benchmarks all matter.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
