# Inkling Small — findings by Grok 4.6

- Source: Thinking Machines (`thinkingmachines/inkling-small`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' open-weight 276B/12B MoE, about a quarter the size of full Inkling, with native text/image/audio reasoning and competitive agentic coding. Distinct from `model/Inkling/` (the 975B flagship).
- **Provider / access:** Hugging Face `thinkingmachines/Inkling-Small`; OpenCode `thinkingmachines/inkling-small`; Vercel AI Gateway / DeepInfra / OpenRouter same slug. Tinker training IDs include 64K and 256K PEFT variants. Chat Completions-style third-party APIs.
- **Release / knowledge:** OpenCode Data lists release 2026-07-30. Knowledge cutoff not stated on the HF card.
- **IDs:** `thinkingmachines/inkling-small`; Tinker `thinkingmachines/Inkling-Small`. No Zen Free ID found (OpenCode list price is paid).
- **Context window:** OpenCode Data and Vercel: **1,000,000** total, **1,000,000** max output. OpenRouter lists 524,288 context / 262,144 completion — gateway-specific. Tinker train/serve SKUs are 64K or 256K. Score uses the 1M inference catalogs, with the OR/Tinker caps as caveats.
- **Modalities:** Text, image, and audio in; text out. Images 40–4096 px/side; audio WAV 16 kHz, ideally <2 min (HF). Hybrid local/global attention; hierarchical image encoder; discrete audio tokens.
- **Pricing (as of 2026-10-20):** OpenCode Data $0.50 / $1.20 / $0.10 cached input per 1M. Vercel $0.30/$1.20. OpenRouter $0.45/$1.20 cache read $0.10. Tinker training prices are separate (limited-time 50% off). Cost scored on OpenCode inference $0.50/$1.20.
- **Architecture:** 42-layer decoder-only MoE: 6 of 256 routed experts + 2 shared per token; 276B total / 12B active. Open weights (HF).

### Raw benchmarks found

All from the Hugging Face Inkling-Small eval table unless noted. SWE-Verified and TB 2.1 for Inkling-Small use Thinking Machines' bash-only / internal harnesses (footnotes).

Agent / tool use:

- Terminal-Bench 2.1 (best harness, vendor): **64.7%**
- MCP Atlas public / all: **79.6% / 79.2%**
- Tau 3 Banking: **15.5%**
- Toolathlon Verified: **54.4%**
- GDPval-AA v2: **1269** Elo
- BrowseComp (with context management): **77.4%**
- AA-Briefcase: **917** Elo
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- AA Index (v4.1) on vendor table: **40.0**
- GPQA Diamond: **89.5%**
- HLE text-only: **31.6%**; HLE with tools: **47.8%**
- CritPt: **8.3%**
- AIME 2026: **95.5%**; HMMT Feb 2026: **90.2%**
- ARC-AGI-1 / 2: **84.0% / 40.1%**
- SimpleQA Verified: **20.6%**
- AA Omniscience index: **-9.0**
- MMMU Pro (Standard 10): **74.0%**

Coding:

- SWE-bench Verified: **80.2%** (bash-only harness)
- SWE-bench Pro (public): **55.9%**
- SciCode: **48.7%**
- LiveCodeBench / DeepSWE / Vibe: **no verified public score found**

Audio / vision extras:

- Audio MC **54.9%**; MMAU **77.0%**; VoiceBench **90.1%**
- Charxiv RQ original / with python: **77.4% / 81.3%**

Long context:

- 1M in OpenCode/Vercel catalogs. **no verified public MRCR / RULER / GraphWalks score found**

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas ~80% is strong; TB 2.1 64.7% is mid (frontier ~88%); Tau3 Banking 15.5% and GDPval 1269 (vs ~1750 frontier) cap it. Vendor TB harness is internal.
- **Reasoning: 82/100.** GPQA 89.5% is frontier-adjacent; HLE 31.6% is below 40%; AA Index 40 is just above the 20–35 mid band. Capped by CritPt 8.3%, SimpleQA 20.6%, and Omniscience -9.
- **Context window: 96/100.** 1M catalogs map to the ≥1M tier. Not 100: no 98% retrieval figure; OpenRouter/Tinker expose smaller windows.
- **Multimodal: 92/100.** Official audio+image in is the 90–100 band (VoiceBench 90.1%, MMAU 77%). Capped by text-only output and no video I/O on the card.
- **Coding: 83/100.** SWE-Verified 80.2% is high; SciCode 48.7% is near the 55% frontier ref; SWE-Pro 55.9% is mid. Capped by TB 2.1 64.7% and the bash-only SWE harness footnote.
- **Cost efficiency: 92/100.** OpenCode $0.50/$1.20 sits on the ~$0.60/$2.20 ≈ 92 anchor. Vercel $0.30 in is cheaper; score uses OpenCode.
- **Overall Score: 86/100.** Mean of 78 + 82 + 96 + 92 + 83 = 86.2 → 86 half-up. Best fit: open omni coding/agents cheaper than full Inkling; don't pick it for Tau3 banking or factuality-sensitive work.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (HF Inkling-Small card, OpenCode Data, Vercel/OpenRouter catalogs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
