# GPT-5.1 Codex — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex (display per OpenAI hyphenated vendor style)
- **Short description:** OpenAI's November 2025 Codex-line agentic coding model — GPT-5.1 optimized for agentic coding in Codex and similar environments, with the underlying snapshot updated regularly. Now two generations behind (GPT-5.2-Codex, GPT-5.3-Codex exist) and absent from OpenAI's current headline lineup; still served.
- **Provider / access:** OpenAI API (Responses API; the Codex models are Responses-first); OpenCode Zen registry ID `opencode/gpt-5.1-codex` (this folder). llm-stats tracks exactly 1 provider (OpenAI first-party).
- **Release / knowledge:** released 2025-11-19 (llm-stats tracker); knowledge cutoff September 2024 (llm-stats).
- **IDs:** `gpt-5.1-codex` (OpenAI); `opencode/gpt-5.1-codex` (Zen registry). A Codex-Max sibling (`gpt-5.1-codex-max`) exists — a different, larger variant.
- **Context window:** 400K total tokens / 128K max output (BenchLM and llm-stats provider row agree — verified across both).
- **Modalities:** text + image in; text out; reasoning yes (agentic coding tuning); tool calls yes; structured outputs supported on the Responses API. The snapshot is updated in place — behavior can shift without a version bump.
- **Pricing (as of 2026-10-16):** paid — $1.25 in / $10.00 out per 1M tokens (OpenAI first-party; llm-stats confirms as the lowest tracked provider). Batch/flex options not verified for this exact ID.
- **Architecture:** proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **83%** (AA, independent)
- Gert Labs: **49.68%** (independent rankings)
- JobBench: **26.2%** (JobBench paper — weak)
- Terminal-Bench / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (AA-GPQA Diamond, independent)
- HLE: **25.7%** (AA-HLE — under the 40% bar)
- Artificial Analysis Intelligence Index: **23.7** (AA current board)
- AA-LCR: **69.3%** (AA long-context reasoning — mid); CritPt: **5.7%** (weak)
- AA-Omniscience: accuracy **39.9%**, hallucination rate **77.2%** (poor)
- AA-IFBench: **70.0%** (instruction following — solid)

Coding:

- LiveCodeBench: **85.6%** (Vals, independent)
- Vibe Code Bench v1.1: **13.12%** (Vals — very weak; a striking outlier vs the 85.6% LCB)
- SWE-bench Verified / SWE-bench Pro / SciCode / DeepSWE: no verified public score found for this exact ID

Long context:

- AA-LCR 69.3% is the only measured long-context signal; 400K window per two sources

Multimodal:

- AA-MMMU-Pro: **72.5%** (AA — measured vision, mid-band); Design Arena Website: **1163** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 83% (AA) is a solid independent anchor and Gert 49.68% is mid; JobBench 26.2% and missing Terminal-Bench/GDPval rows cap it.
- **Reasoning: 72/100.** GPQA Diamond 86.0% and AA-LCR 69.3% are respectable; HLE 25.7%, AA Index 23.7, CritPt 5.7% and the 77.2% hallucination rate cap it mid-band.
- **Context window: 78/100.** 400K tokens (top of the 200K–500K tier = 65–84) verified across two sources; AA-LCR 69.3% is the only measured retrieval.
- **Multimodal: 72/100.** Text + image input, text output, with measured MMMU-Pro 72.5% — above the 60–70 image-in band on measured vision.
- **Coding: 74/100.** LiveCodeBench 85.6% (Vals) is strong, but the Vibe Code Bench 13.12% outlier, missing SWE-bench rows and the two-newer-Codex-generations context hold it to mid-frontier.
- **Cost efficiency: 74/100.** $1.25/$10.00 per 1M sits between the ~$1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, closer to the latter on output price.
- **Overall Score: 73/100.** Mean of the five quality dims (70 + 72 + 78 + 72 + 74) / 5 = 366/5 = 73.2 → 73. Best fit: legacy Codex-line agentic coding reproducibility — for new work, GPT-5.3-Codex or the GPT-6 family supersede it at every tier.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (≥3 independent sources: benchlm.ai 16-row profile fetched live, llm-stats model page (release/pricing/context/cutoff), OpenAI platform docs + model-card PDF as referenced by llm-stats; no conflicts found between sources); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
