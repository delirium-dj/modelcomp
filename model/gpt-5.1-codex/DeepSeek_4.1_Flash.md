# GPT-5.1 Codex — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`openai/gpt-5.1-codex`, hosted as `opencode/gpt-5.1-codex`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-1-codex`, 4 rows) computes an overall **50.39/100 (#96 of 228)** and re-confirms the prior pass. **No score change.**

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's coding-specialized variant of GPT-5.1 (November 2025), fine-tuned for agentic software engineering in Codex-style environments — long independent runs, feature work, debugging, refactoring, and code review. A real SKU distinct from base GPT-5.1; a `gpt-5.1-codex-max` extended-thinking tier also exists.
- **Provider / access:** OpenAI API / Responses API (`gpt-5.1-codex`); OpenRouter `openai/gpt-5.1-codex`; OpenCode route `opencode/gpt-5.1-codex`. Supports tool calls, JSON mode, reasoning effort, verbosity.
- **Release / knowledge:** 2025-11-19; knowledge cutoff not published on the model page.
- **IDs:** `openai/gpt-5.1-codex` (Display name uses the hyphenated vendor style per `RULES.md`; no Free-tier ID).
- **Context window:** 400,000 tokens (BenchLM model page, BenchGecko, ai-tldr, Writingmate). Conflicting trackers list 272K (TokenMix, contextwindows.dev) — the 272K figure may reflect an older GPT-5.x Codex cap; treated as a caveat, not the headline.
- **Modalities:** text + image in (AA-MMMU-Pro 72.5%); text out; explicit reasoning mode; tool calls; JSON mode.
- **Pricing (as of 2026-10-18):** $1.25 / 1M input, $10.00 / 1M output, cached input $0.125 (BenchLM + OpenRouter listing). A TokenMix review cites $2.50/$15 for the base Codex and $10/$40 for Codex-Max — a conflicting figure listed for traceability. Not a free tier.
- **Architecture:** proprietary (weights undisclosed; coding-focused fine-tune of GPT-5.1).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench (τ²-bench): **83%** (Artificial Analysis, via BenchLM)
- Terminal-Bench 2.1: no verified public score found
- IFBench (instruction following): **70.0%** (Artificial Analysis, via BenchLM)
- GDPval-AA: no verified public score found — Claw-Eval / ClawProBench: no verified public score found
- JobBench: **26.2%** (JobBench paper, via BenchLM); Gert Labs **49.68%** (via BenchLM)
- Chatbot Arena ELO: **1395** (SerenitiesAI)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis, via BenchLM)
- HLE: **25.7%** (Artificial Analysis, via BenchLM)
- AA-LCR: **69.3%** (Artificial Analysis)
- CritPt: **5.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **23.7%**; BenchLM overall **50.37/100, #93 of 954**
- AA-Omniscience Accuracy: **39.9%** / Hallucination Rate: **77.2%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **72%** (OpenAI-reported at launch, cited by TokenMix); SWE-bench Pro **~55%** (TokenMix)
- LiveCodeBench (Vals): **85.6%** (Vals AI, via BenchLM); LiveCodeBench v6 **82%** (TokenMix)
- HumanEval: **93%** (TokenMix)
- Vibe Code Bench v1.1: **13.12%** (Vals AI, via BenchLM)
- Design Arena Website: **1163** (OpenRouter, via BenchLM)
- gpt-5.1-codex-max variant: SWE-bench Verified 76%, SWE-bench Pro 60% (TokenMix)

Long context:

- AA-LCR 69.3% is the closest independent long-context signal; no MRCR/RULER figure found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong τ²-bench 83% and IFBench 70.0% (steerable agentic coding), capped by the absence of Terminal-Bench 2.1 / GDPval-AA / OSWorld figures and weak JobBench 26.2%.
- **Reasoning: 72/100.** GPQA Diamond 86.0% is solid, but HLE 25.7%, AA-LCR 69.3%, AA Intelligence Index 23.7% and a very high 77.2% hallucination rate place it mid-tier, not frontier.
- **Context window: 78/100.** 400K lands in the 200K–500K band (well above the 200K = 70 anchor); a conflicting 272K reading is the main cap.
- **Multimodal: 68/100.** Text + image input (AA-MMMU-Pro 72.5%) with no audio/video output — the +image-in band.
- **Coding: 82/100.** LiveCodeBench 85.6%, SWE-bench Verified 72% and HumanEval 93% are strong for its era, but Vibe Code Bench 13.12% (~Vibe coding weak) and SWE-bench Pro ~55% keep it well below the 2026 frontier.
- **Cost efficiency: 80/100.** $1.25/$10 (cached $0.125) is competitive mid-frontier pricing; the conflicting $2.50/$15 reading would lower this to ~65.
- **Overall Score: 76/100.** (82 + 72 + 78 + 68 + 82) / 5 = 76.4 → 76. Best fit: IDE-native interactive coding and OpenAI-ecosystem agentic workflows, not hard reasoning or long-context work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (OpenAI model/system-card pages, BenchLM, Artificial Analysis, Vals AI, OpenRouter, TokenMix, SerenitiesAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
