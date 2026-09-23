# MiMo V2.5 Free — findings by GLM 5.2 Coding

- Source: Xiaomi (`opencode/mimo-v2.5-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's MiMo-V2.5 served free on OpenCode Zen (also listed as Xiaomi MiMo-V2.5 Free — same ID). Top use case: free multimodal (image+video) coding assistance with capped context.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Free); same weights as Xiaomi's first-party MiMo-V2.5 API.
- **Release / knowledge:** MiMo-V2.5 generation (V2.6 Pro/Flash siblings exist per BenchLM family record); exact date and cutoff not published in the records checked.
- **IDs:** `opencode/mimo-v2.5-free` (Free ID exists on Zen); models.dev `mimo-v2.5-free` entry caps at 200K context / 32K output.
- **Context window:** 1M native (BenchLM MiMo-V2.5 record) but Zen free tier caps at 200K input / 32K output (models.dev) — scored on the served 200K cap.
- **Modalities:** Text, image, video input (Video-MME/CharXiv verified); text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** Free ($0 in / $0 out) on Zen. First-party Xiaomi pricing (~$0.435/$0.87 per model-comparison records) applies off-Zen.
- **Architecture:** Proprietary per BenchLM (source type listed Proprietary); parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM MiMo-V2.5 record (16 of 481 benchmarks covered, 2026-09-22); the Zen free SKU is not separately benchmarked — same weights as `MiMo-V2.5`.

Agent / tool use:

- Terminal-Bench 2.0: **65.8%** (BenchLM; TB2.1 Vals 60.7%)
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval: **62.3%** (BenchLM)
- Toolathon / MCP-Atlas: no verified public score found
- Gert Labs: **46.89%**; ResearchClawBench: **16.9%**; MM-ClawBench: **23.8%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **81.6%** (Vals harness, BenchLM)
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Omniscience: no verified public score found; MMLU-Pro (Vals): **82.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.0%** (SWE-bench Vals) / **56.1%** (SWE-bench Pro) (BenchLM)
- LiveCodeBench: **81.5%** (Vals harness, BenchLM)
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M native window (BenchLM) but served at 200K cap on the Zen free tier (models.dev); no MRCR/RULER number published.

### Normalized scores (1–100)

- **Tool use: 66/100.** Claw-Eval 62.3% and TB2.0 65.8% are mid-tier; capped by Gert Labs 46.9%, ResearchClawBench 16.9% and no GDPval/Tau evidence.
- **Reasoning: 70/100.** GPQA 81.6% and MMLU-Pro 82.9% sit below the 90%/88% frontier refs and no HLE/Index numbers are public — solid free-tier reasoning, not frontier.
- **Context window: 70/100.** Served at 200K cap on the free tier (models.dev) despite 1M native — mid tier for what you actually get.
- **Multimodal: 82/100.** Text + image + video input (Video-MME 87.7%, CharXiv 81%, MMMU-Pro 77.9%); text-only output.
- **Coding: 72/100.** LiveCodeBench 81.5% is strong; capped by SWE Vals 71.0% and SWE Pro 56.1%.
- **Cost efficiency: 100/100.** $0 in / $0 out Free ID on Zen — unbeatable at any capability level.
- **Overall Score: 72/100.** (66+70+70+82+72)/5 — the free multimodal pick: video+image understanding and decent coding at $0, capped by a 200K served window.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + models.dev/Zen free-tier docs) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
