# Xiaomi MiMo-V2.5-Pro — findings by Muse Spark 1.3 Contributor

- Source: Xiaomi/MiMo-V2.5-Pro, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), re-verified 2026-10-16 (UTC, see Re-verification section; scores hold 71)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro (Xiaomi open-weight, MiMo V2.5 family Pro tier)
- **Short description:** Xiaomi flagship open-weights MoE (1.02T) for demanding agentic and 1,000+ tool-call tasks with strong 1M coherence; text-focused Pro sibling of the omni base.
- **Provider / access:** Xiaomi via mimo.xiaomi.com + HF `XiaomiMiMo/MiMo-V2.5` family; Xiaomi platform + Sophon (`mimo-v2.5-pro`).
- **Release / knowledge:** 2026 (V2.5 family year); knowledge cutoff undisclosed
- **IDs:** `mimo-v2.5-pro` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M (Base 256K) — verified via Xiaomi family page + Sophon (1.1M listed)
- **Modalities:** text-only (Pro); reasoning yes; tool calls yes (1,000+ tool-call tasks)
- **Pricing (as of 2026-09-18):** Paid ~$0.44/$0.87 per 1M (Xiaomi platform; $1.00/$3.00 alternate routes noted)
- **Architecture:** open-weights MoE, 1.02T total / 42B active (Xiaomi Pro page)

### Raw benchmarks found

Agent / tool use:

- Tau2: **94.2%** (Sophon Pro page)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (closest proxy as provisional: 1,000+ tool-call task positioning, vendor claim)

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (Sophon Pro page)
- HLE: **35.7%** (Sophon Pro page)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **43 AA Index (Pro) vs 38 base** (AA comparison page)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M coherence claimed (vendor); no independent MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2 94.2% is elite with 1,000+ tool-call positioning; capped by missing TB/Tau3/GDPval harness numbers.
- **Reasoning: 78/100.** GPQA 86.6% + HLE 35.7% + Index 43 (above base 38) show strong reasoning; capped below GPQA 90%+ frontier.
- **Context window: 100/100.** 1M verified tier; top mapping despite 256K base-serve note.
- **Multimodal: 15/100.** Text-only Pro per curated metadata and AA (Pro no image); 15 is the text-only floor.
- **Coding: 82/100.** Strong agentic-code positioning in a coding family with base SWE-Pro ~56%; capped by zero Pro-specific public coding harness numbers.
- **Cost efficiency: 85/100.** Paid ~$0.44/$0.87 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 71/100.** Mean of the five non-cost dims (82+78+100+15+82)/5 = 71.4; best-fit cheap paid long-context demanding-agent pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Xiaomi family pages, Hugging Face, Sophon, Artificial Analysis comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-16 (28 days after 2026-09-18)

Original research date 2026-09-18. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-16: (1) official Xiaomi MiMo-V2.5 family page (mimo.xiaomi.com/mimo-v2-5 — confirms 1M context, 310B/15B MoE, 48T tokens, best-in-class agency), (2) Artificial Analysis MiMo-V2.5-Pro comparison page (Index 43 Pro vs 38 base), (3) Sophon Pro page + BenchLM/BenchmarkList mirrors (Tau2 94.2%, GPQA 86.6%, HLE 35.7%). Conflicting results compared below.

| Dimension | 2026-09-18 | 2026-10-16 | Change |
|---|---|---|---|
| Tool use | 82 | 82 | hold — Tau2 94.2% elite stands, uncontradicted; official family page confirms 1,000+ tool-call positioning; no new TB/Tau3/GDPval Pro absolute |
| Reasoning | 78 | 78 | hold — GPQA 86.6% + HLE 35.7% + Index 43 stand; no new LCR/CritPt Pro absolute |
| Context | 100 | 100 | hold — 1M verified tier stands; official page confirms 32K→256K→1M progressive extension |
| Multimodal | 15 | 15 | hold — text-only Pro confirmed; floor applies |
| Coding | 82 | 82 | hold — provisional on family positioning; official MiMo Coding Bench "matching Pro at half cost" is qualitative only; zero Pro-specific public coding harness numbers still |
| Cost | 85 | 85 | hold — ~$0.44/$0.87 paid stands |
| Overall | 71 | 71 | hold — (82+78+100+15+82)/5 = 71.4 → 71 |

Vendor vs mirrors: official family page is consistent with filed Sophon/AA rows; no contradiction. The coding dimension remains the weakest-evidenced (provisional 82 on zero Pro-direct harness numbers) — flagged again this pass, but no new adverse evidence meets the bar for a downward change either. No TB, no SWE-Pro, no LCR absolute found — prior gaps stand. Scores hold.

Sources: https://mimo.xiaomi.com/mimo-v2-5/ · https://artificialanalysis.ai/models/xiaomi-mimo-v2-5-pro · https://www.vals.ai/models/xiaomi_mimo-v2-5-pro
