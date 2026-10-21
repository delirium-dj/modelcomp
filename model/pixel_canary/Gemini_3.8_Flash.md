# Pixel Canary — findings by Gemini 3.8 Flash

- Source: Stealth / Vercel AI Gateway (`stealth/pixel-canary`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (Callstack Apex)
- **Short description:** Anonymous stealth coding specialist launched on Vercel AI Gateway and subsequently revealed as Callstack Apex, optimized for Next.js and React Native agentic development with 90.3% baseline on Next.js evals.
- **Provider / access:** Callstack via Vercel AI Gateway (`stealth/pixel-canary`) and Callstack API (`api.callstack.ai`). Integrated into Cline and Vercel AI SDK.
- **Release / knowledge:** 2026-09-25 stealth release; October 1, 2026 GA announcement; knowledge cutoff late 2026.
- **IDs:** `stealth/pixel-canary`, `opencode/pixel_canary`, `callstack/apex`.
- **Context window:** 262,144 tokens total context; 131,072 maximum output tokens.
- **Modalities:** Text input and text/code output only (text-only model).
- **Pricing (as of 2026-10-21):** Free ($0.00 / 1M prompt and completion) during active stealth preview on Vercel AI Gateway; commercial API and self-hosting options via Callstack. Note: stealth preview lacks Zero Data Retention (ZDR).
- **Architecture:** Specialized engineering architecture built upon a Qwen foundation with domain fine-tuning across React Native and Next.js frameworks.

### Raw benchmarks found

Agent / tool use:

- Next.js Agent Evals Tooling: High accuracy tool invocation in Cline agent harnesses and Vercel Next.js task runners.
- Expensify React Native Code Review: Completed full repo review in 2m 16s ($0.09) vs Claude Opus 5.5 (13m 30s, $0.60).
- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- Next.js Architectural Reasoning: High reasoning capability across full-stack Next.js and native bridge architectures.
- GPQA Diamond: no verified public score found
- Humanity's Last Exam (HLE): no verified public score found
- Artificial Analysis Intelligence Index: not formally indexed

Coding:

- Vercel Next.js Agent Evals (31 tasks): **90.3%** baseline (28/31 tasks, tying GPT-6 Astra high effort)
- Vercel Next.js Agent Evals with docs/AGENTS.md: **96.8%** (30/31 tasks)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 262,144 tokens context window with 131,072 max output ceiling documented on Vercel gateway.

### Normalized scores (1–100)

- **Tool use: 76/100.** Effective tool use and autonomous repository navigation in Cline and Next.js agent suites; lacks broad general-agent benchmark validation.
- **Reasoning: 70/100.** Strong domain-level reasoning across web architecture, state management, and framework lifecycles; general multi-discipline reasoning remains unmeasured.
- **Context window: 76/100.** 262K total context with an unusually generous 131K output limit, well-suited for emitting complete modules and refactored components.
- **Multimodal: 15/100.** Text-only model; awarded baseline 15/100 in accordance with standardized repository evaluation criteria for non-multimodal models.
- **Coding: 88/100.** Outstanding 90.3% baseline and 96.8% with docs on Vercel's 31-task Next.js evaluation suite, matching frontier models like GPT-6 Astra on target web engineering benchmarks.
- **Cost efficiency: 100/100.** $0 preview route on Vercel AI Gateway offers supreme cost utility for web developers, tempered only by lack of ZDR privacy protections.
- **Overall Score: 65/100.** Arithmetic mean of non-cost metrics: (76 + 70 + 76 + 15 + 88) / 5 = 65.0. Exceptional, highly cost-effective web coding specialist whose overall score is constrained only by its text-only modality and domain focus.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Multi-source web research into Vercel AI Gateway metrics, Callstack Apex release announcements, and Next.js Agent Eval benchmark results; normalized scores 1–100.
