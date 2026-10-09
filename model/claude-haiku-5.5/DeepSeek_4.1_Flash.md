# Claude Haiku 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Haiku 5.5 (`claude-haiku-5-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's small/fast Claude 5.5-family model (released 2026-10-07), the first Haiku positioned as a "credible agent" rather than a classifier — 1M context, adjustable reasoning effort, computer/browser-use tools. Aimed at high-volume classification, extraction, routing, voice/chat agents, and as a subagent under Opus 5.5 / Sonnet 5.5.
- **Provider / access:** Anthropic Claude API (`claude-haiku-5-5`), Claude.ai (all plans), Claude Code, Amazon Bedrock (`anthropic.claude-haiku-5-5`), Vertex AI, Microsoft Foundry. Messages/Chat API; adaptive thinking; prompt caching.
- **Release / knowledge:** 2026-10-07; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-haiku-5-5`; OpenCode Zen tracks `opencode/claude-haiku-5.5`. No Zen Free ID.
- **Context window:** 1,000,000 input tokens / 128,000 max output (300K on Message Batches with beta header).
- **Modalities:** text, image, PDF in; text out. Reasoning (effort levels low→max, default medium); tool calls; computer/browser-use toolsets; prompt caching.
- **Pricing (as of 2026-10-09):** two-tier — **$0.10 / $0.50 per 1M** in/out for prompts ≤100K (cache read $0.01); **$0.50 / $2.50** above 100K (cache read $0.05). Paid only.
- **Architecture:** proprietary; not open weights.

### Raw benchmarks found

Agent / tool use (Anthropic self-reported unless noted):

- OSWorld 2.1 (offline partial): **72.4%** (strict pass rate **37.1%**) — from 15.7% on Haiku 4.5
- Terminal-Bench 4.0: **39.2%** (Anthropic, 66 tasks ×10; also 32.8% via Artificial Analysis)
- GDPval-AA v2.1: **1620 Elo** (from 735); AA-Briefcase v1.1: **1578 Elo**
- AA Harvey LAB v1.0 89.9%; AA AutomationBench 35.4%; GDP.pdf 20.8%; Chartography (no tools) 46.4% / with tools 86.2%
- BenchCAD Vision2Code (no tools) 67.0 / with tools 87.0 (voxel IoU ×100)

Reasoning / knowledge:

- HLE no tools: **45.9%** (from 10.2%); HLE with tools: **57.4%** (from 18.7%)
- AA-LCR: **82.7%**; CritPt 18.9%; AA-HLE 44.4%
- Artificial Analysis Intelligence Index: **43.4**; AA-Omniscience Index 10.7%
- OfficeQA 73.5%; OfficeQA Pro 60.3%; HealthBench Professional 64.8% (length-adjusted); PhysicianBench 43.0%
- Global MMLU 87.8% (42 languages); MILU 87.6% (11 languages)

Coding:

- SWE-bench Pro **64.8%**; SWE-bench Multilingual 83.7%; SWE-bench Multimodal 30.7%
- FrontierCode 1.1 Main **46.4%** (extended 58.4%); FrontierSWE v2 43.8%; ProgramBench 82.0%
- AA-SciCode 55.0%; Terminal-Bench-Science 0.1 20.6%; Bug Hunt Bench 21.5 fixes

Long context:

- 1M-token window with AA-LCR 82.7%; **no MRCR/RULER/GraphWalks published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 79/100.** OSWorld partial 72.4%, Terminal-Bench 4.0 39.2% and GDPval-AA 1620 Elo clear the previous Haiku floor, but the OSWorld strict rate (37.1%) and TB 4.0 remain well behind Sonnet 5.5 (83.9% / 70.6%).
- **Reasoning: 78/100.** HLE 45.9% (57.4% with tools) and AA-LCR 82.7% are solid for a small model; AA Intelligence Index 43.4 and CritPt 18.9% cap it below frontier.
- **Context window: 94/100.** 1M-token input / 128K output (≥1M band) vs 200K on Haiku 4.5; no ≥98%-at-512K retrieval benchmark, so held at 94.
- **Multimodal: 75/100.** Text + image + PDF in, text out; real vision tasks (BenchCAD Vision2Code 67.0) but no audio/video.
- **Coding: 82/100.** SWE-bench Pro 64.8%, Multilingual 83.7%, ProgramBench 82% and FrontierCode 46.4% make it usable as a coding subagent; SWE Multimodal 30.7% and TB 4.0 cap it.
- **Cost efficiency: 90/100.** $0.10/$0.50 per 1M is the cheapest frontier-lab agent tier, but the 100K pricing cliff plus a ~30% heavier tokenizer can erode the headline discount on long prompts.
- **Overall Score: 82/100.** (79 + 78 + 94 + 75 + 82) / 5 = 81.6 → 82. Best fit: high-volume agentic subtasks, routing/extraction, and cost-sensitive computer-use where Sonnet 5.5 is too expensive per turn.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across BenchLM, the LLM Stats Haiku 5.5 launch review (Anthropic launch table + system card), Artificial Analysis and Anthropic's own materials. All launch scores are Anthropic self-reported and not independently verified; normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
