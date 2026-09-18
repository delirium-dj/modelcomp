# GLM 5.1 Coding — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Requested as Free; no Zen Free ID found — scored on paid pricing.

- Source: Z.ai / GLM 5.1 (Coding variant; paid Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.ai's coding-specialist GLM 5.1, hosted on OpenCode Zen as paid `opencode/glm-5.1` ($1.40/$4.40). Long-horizon coding/agent focus. No Zen Free ID as of 2026-09-17.
- **Provider / access:** OpenCode Zen `opencode/glm-5.1` (paid); HuggingFace `zai-org/GLM-5.1`. Chat Completions.
- **Release / knowledge:** Released 2026 per Z.ai blog; knowledge cutoff ≈ early-2026.
- **IDs:** `opencode/glm-5.1` (Zen paid). No Free ID.
- **Context window:** 200K total (AA model page).
- **Modalities:** Text in/out; tool calls; reasoning on. Text-only.
- **Pricing (as of 2026-09-17):** Paid $1.40 in / $4.40 out per 1M (Zen); AA $1.20/$4.40.
- **Architecture:** Proprietary Z.ai MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **63.5/69.0** (Z.ai blog).
- Tau3: **70.6** (Z.ai blog).
- GDPval-AA: **no verified public score found** direct for GLM-5.1.
- Claw-Eval: **no verified public score found**.
- Toolathon / MCP-Atlas: **no verified public score found** direct.

Reasoning / knowledge:

- GPQA Diamond: **86.2** (Z.ai blog).
- HLE: **31 / 52.3 tools** (Z.ai blog).
- LCR / MRCR / CritPt: **no verified public score found**.
- AA Intelligence Index: **32** (AA `glm-5-1`).

Coding:

- SWE-Pro: **58.4** (Z.ai blog).
- LiveCodeBench: **no verified public score found**.
- SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.

Long context:

- 200K declared; no MRCR at depth.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.0 63.5/69.0 (frontier-mid), Tau3 70.6 (frontier).
- **Reasoning: 80/100.** GPQA 86.2 (frontier), HLE 31 (mid), Index 32 (mid). Cap = missing MRCR/LCR.
- **Context window: 70/100.** 200K = 70 baseline.
- **Multimodal: 15/100.** Text-only.
- **Coding: 88/100.** SWE-Pro 58.4 (mid-high) + TB2.0 63.5/69.0 frontier lift.
- **Cost efficiency: 75/100.** Paid $1.40/$4.40 → methodology ~75 (between $0.60/$2.20=92 and $1.25/$4.25=88, slightly lower than the table-anchor; conservative 75 reflecting no $0 promo).
- **Overall Score: 68/100.** Mean (85+80+70+15+88+75)/6 = 68.8 → 69. Best fit: top paid open coding/long-horizon pick.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (Z.ai blog, HF `zai-org/GLM-5.1`, AA `glm-5-1` model page); scores are normalized 1–100 interpretations, not official vendor scores. Cost scored on paid Zen pricing (no Free ID).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.