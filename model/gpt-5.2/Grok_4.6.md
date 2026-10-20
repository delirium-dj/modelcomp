# GPT-5.2 — findings by Grok 4.6

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December 2025 previous flagship reasoning model for professional work. API docs now recommend GPT-6 Astra; Artificial Analysis marks the xhigh page deprecated after GPT-5.4. Distinct from GPT-5.2 Pro.
- **Provider / access:** OpenAI API, model `gpt-5.2`, default snapshot `gpt-5.2-2025-12-11`. reasoning.effort: none (default), low, medium, high, xhigh.
- **Release / knowledge:** Snapshot 2025-12-11. Knowledge cutoff **2025-08-31** (OpenAI docs). Launch post "Introducing GPT-5.2".
- **IDs:** `gpt-5.2`; `openai/gpt-5.2`. Pro is `gpt-5.2-pro` (separate). No Zen Free ID found.
- **Context window:** **400,000** tokens; 128,000 max output (OpenAI docs). Not 1M — that arrives with 5.4.
- **Modalities:** Text and image in; text out; reasoning tokens. No audio/video on the card.
- **Pricing (as of 2026-10-20):** $1.75 / $0.175 cached / $14.00 per 1M (OpenAI docs / AA).
- **Architecture:** Proprietary.

### Raw benchmarks found

Figures are GPT-5.2 **Thinking** unless noted. Pro is a different SKU.

Agent / tool use:

- SWE-Bench Pro (coding-adjacent agent): **55.6%** (OpenAI launch)
- OSWorld-Verified: **47.3%** (OpenAI GPT-5.4 launch comparison table for GPT-5.2)
- Toolathlon: **46.3%** (same 5.4 comparison table)
- BrowseComp: **65.8%** (same)
- GDPval wins/ties: **70.9%** (OpenAI 5.4 launch table)
- MCP-Atlas: **67.6%** (LLMLearner extra-high)
- Terminal Bench Hard: **47.0%** (LLMLearner)
- Tau3-Banking / Claw-Eval / TB 2.1: **no verified public score found** on the OpenAI 5.2 card

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** Thinking / **93.2%** Pro (OpenAI)
- HLE (no tools): **34.5%** Thinking / **36.6%** Pro
- HLE (search + Python): **45.5%** Thinking / **50.0%** Pro
- Artificial Analysis Intelligence Index: **30*** estimated (AA gpt-5-2 xhigh; deprecated page)
- AA-style GPQA **90.3%** / HLE **35.4%** / SciCode **52.1%** (OminiGate AA snapshot)
- MMMU-Pro: **80.4%** (LLMLearner)
- ARC-AGI-2: **52.9%** Thinking (LLMLearner synthesis of launch)

Coding:

- SWE-bench Verified: **80.0%** (OpenAI; Thinking)
- SWE-Bench Pro: **55.6%** (OpenAI)
- LiveCodeBench: **89.4%** (AA via LLMLearner) / **88.9%** (OminiGate)
- SciCode: **52.1%** (OminiGate AA)
- Vibe Code Bench v1.1: **53.5%** (LLMLearner)

Long context:

- 400K window. **no verified public MRCR / RULER / GraphWalks score found**

### Normalized scores (1–100)

- **Tool use: 75/100.** OSWorld 47.3% and Toolathlon 46.3% are mid; MCP-Atlas 67.6% is mid-high. Capped by missing TB 2.1/Tau3 and GDPval 70.9% wins/ties rather than ~1750 Elo.
- **Reasoning: 84/100.** GPQA 92.4% is frontier; HLE 34.5% is under 40%; AA Index 30 is mid. Capped by Index/HLE vs GPQA split.
- **Context window: 80/100.** 400K sits in the 200K–500K band (200K = 70, 500K–1M = 85–94). 128K max out is fine.
- **Multimodal: 65/100.** Image-in / text-out is the 60–70 band.
- **Coding: 82/100.** SWE-Verified 80% and LCB ~89% are strong; SWE-Pro 55.6% and SciCode 52.1% (near 55% ref) cap it. No DeepSWE found.
- **Cost efficiency: 68/100.** $1.75/$14 sits between ~$1.25/$4.25 (88) and ~$3/$15 (60), pulled down by $14 output.
- **Overall Score: 77/100.** Mean of 75 + 84 + 80 + 65 + 82 = 77.2 → 77 half-up. Best fit: legacy paid Thinking SKU with solid SWE-Verified; prefer later GPT snapshots for 1M context and computer use.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (OpenAI GPT-5.2 docs and launch post, AA gpt-5-2 page, GPT-5.4 comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
