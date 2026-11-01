# Gemini 3.8 Flash — findings by Kimi K3.1 Pro

- Source: Google DeepMind/Gemini 3.8 Flash (`google/gemini-3.8-flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's proprietary high-throughput multimodal reasoning model for cost-sensitive coding, scientific research and long-document agents. The restricted Cyber sibling is a separate deployment and its scores are not attributed here.
- **Provider / access:** Gemini API, AI Studio, Gemini Enterprise, Google Antigravity and OpenRouter Chat Completions; configurable reasoning effort, tools, JSON/structured output and streaming.
- **Release / knowledge:** Generally available 2026-09-02; knowledge cutoff not verified in the reviewed material.
- **IDs:** `google/gemini-3.8-flash` on OpenRouter; no OpenCode Zen Free ID verified.
- **Context window:** 1,048,576 tokens input; 65,536 completion tokens on OpenRouter (Google model card describes a 64K output).
- **Modalities:** Text, image, audio, video and documents/PDF in; text out; reasoning, tool calls, structured outputs and JSON mode.
- **Pricing (as of 2026-11-01):** Introductory $0.75 input / $3.75 output / $0.075 cached input per 1M through 2026-12-31; 50% batch discount. Scheduled standard price from 2027-01-01 is $1.50/$7.50.
- **Architecture:** Proprietary; parameter count and weights not disclosed. Shares foundational intelligence with 3.8 Flash Cyber but is a distinct deployment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** in Google's developer guide and **89.4%** in launch reporting; independent Vals AI run **81.3%**. Harness/version differences must be preserved.
- Terminal-Bench 4.0: **19.1%** vendor-reported, far below the frontier leaders (Google table compiled by IntuitionLabs).
- DeepSWE v1.1: **73.8%** reported in benchmark comparisons; Google states it outperforms most larger frontier models on this long-horizon test.
- SWE Atlas Codebase QnA: **45.2%** reported by AskClash's comparison.
- GDP.PDF: **35.0%** all-pass document comprehension (Google table compiled by IntuitionLabs).
- Tau3-Banking / Tau2-Bench / GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google model card/launch table).
- GPQA Diamond: **94.4%** in the independent Vals AI run (BenchLM/IntuitionLabs).
- MMLU-Pro: **90.2%** in the independent Vals AI run.
- Artificial Analysis Intelligence Index v4.3.2: **41**, ranked #50 of 227 at High effort on 2026-10-10; launch reporting used a different index version and is not directly comparable.
- BenchLM BenchAlign: **73.2/100**, ranked #12 of 218 in the October update compiled by IntuitionLabs.
- BioMysteryBench Hard: **56.5%**; LABBench2: **86.2%** (Google).
- LCR / MLCR / CritPt: **no verified public numeric score found**.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench: **80.0%** in the independent Vals AI run (IntuitionLabs/BenchLM).
- DeepSWE v1.1: **73.8%** (benchmark comparison/Google positioning).
- Terminal-Bench 2.1: **81.3% independent**, versus 89.4–90.8% vendor-reported.
- Terminal-Bench 4.0: **19.1%** vendor-reported.
- SWE-bench Multimodal: **40.8%** (Vals AI via OpenRouter).
- LiveCodeBench / SciCode / Vibe Code Bench / SWE-Pro: **no verified public score found**.

Long context:

- Verified 1M-token input window and support for documents up to roughly 1,000 pages; GDM-MRCR v2 was evaluated at 128K but **no numeric result was exposed in the reviewed text**.

Multimodal:

- CharXiv Reasoning without tools: **86.2%** (Google).
- MMMU-Pro: **85.6%** (DataLearner benchmark index).

### Normalized scores (1–100)

- **Tool use: 84/100.** Excellent Terminal-Bench 2.1 and scientific-tool results coexist with only 19.1% on Terminal-Bench 4.0, showing a sharp drop on the longest-horizon agent tasks.
- **Reasoning: 93/100.** HLE-Verified 54.9%, GPQA 94.4%, MMLU-Pro 90.2% and strong biology reasoning provide broad evidence; newer composite rankings are less dominant.
- **Context window: 90/100.** The 1M input window and long-document support are verified, but no numeric retrieval score was available and output is limited to about 64K.
- **Multimodal: 93/100.** Audio, image, video and PDF input plus CharXiv 86.2% and MMMU-Pro 85.6% show strong coverage; GDP.PDF 35% reveals strict document-comprehension limits.
- **Coding: 91/100.** DeepSWE 73.8% and SWE-bench 80% are strong, but independent Terminal-Bench 2.1 trails vendor figures and Terminal-Bench 4.0 is weak.
- **Cost efficiency: 94/100.** Introductory $0.75/$3.75 pricing, cheap caching and batch discounts are excellent for this capability level; high reasoning can consume about 30% more output tokens than 3.7 Flash.
- **Overall Score: 90.4/100.** Half-up mean of 84, 93, 90, 93 and 91; best fit for cost-sensitive multimodal research and medium-horizon coding rather than the hardest terminal-agent workloads.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-01
- Method: Independent public internet research using three successful searches, Google's launch documentation, OpenRouter and a source-linked IntuitionLabs review distinguishing vendor and independent runs; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Google DeepMind — Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [IntuitionLabs — Gemini 3.8 Flash source-verified review](https://intuitionlabs.ai/articles/gemini-3-8-flash-research-tasks-review)
  - [OpenRouter — Gemini 3.8 Flash API](https://openrouter.ai/google/gemini-3.8-flash)
  - [Google AI — Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- Future sources: add a new file next to this one using the same headings.
