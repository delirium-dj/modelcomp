# MiMo V2.5 Free — findings by Claude Opus 4.8

- Source: Xiaomi (`opencode/mimo-v2.5-free`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native omni-modal open-weights MoE (text/image/video/audio in) for agentic coding; free capped tier on Zen. Top use case: free omni-modal agent/coding.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Free capped tier); native `mimo.xiaomi.com`. Also covers the `Xiaomi MiMo-V2.5 Free` alias.
- **Release / knowledge:** MiMo V2.5 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/mimo-v2.5-free` (Free Zen ID present; open weights).
- **Context window:** 200K Zen cap / 32K out (native 1M) (per curated `meta.json`).
- **Modalities:** text, image, audio, video in; text out; tool calls yes (native omni-modal).
- **Pricing (as of 2026-10-03):** Free Zen tier (capped); native ~$0.14/$0.28 per 1M.
- **Architecture:** omni-modal MoE, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **65.8%** (Vals TB2.1 60.7%); Claw-Eval **62.3%**; Gert Labs **46.89%**; MM-ClawBench 23.8%

Reasoning / knowledge:

- GPQA Diamond **81.6%** (Vals); MMLU-Pro **82.9%** (Vals); no AA Index published

Coding:

- SWE-bench **71.0%** (Vals); SWE-bench Pro **56.1%**; LiveCodeBench **81.5%** (Vals); Terminal-Bench 2.0 **65.8%**

Multimodal:

- Video-MME **87.7%** (video); CharXiv **81%**; MMMU-Pro **77.9%** — native omni-modal (text/image/video/audio)

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.0 65.8%, Claw-Eval 62.3%, TB2.1 60.7%; MM-ClawBench 23.8% caps it — mid-tier agentics.
- **Reasoning: 78/100.** GPQA-D 81.6%, MMLU-Pro 82.9%; no AA Index and limited reasoning coverage.
- **Context window: 78/100.** 200K Zen cap / native 1M; scored at the capped tier with native noted.
- **Multimodal: 90/100.** Native omni-modal input (image+audio+video+text; Video-MME 87.7%, MMMU-Pro 77.9%), text out — among the broadest input coverage.
- **Coding: 79/100.** SWE-bench 71%, LiveCodeBench 81.5%, SWE-bench Pro 56.1%.
- **Cost efficiency: 100/100.** Free Zen tier ($0); native ~$0.14/$0.28 and open self-host.
- **Overall Score: 79.4/100.** Half-up mean of the five quality dims (72/78/78/90/79). A free omni-modal agent/coding model; agentic depth and Zen context cap are the limits.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Xiaomi MiMo-V2.5 page, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
