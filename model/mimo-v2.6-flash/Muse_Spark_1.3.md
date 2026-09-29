# MiMo V2.6 Flash — findings by Muse Spark 1.3

- Source: Xiaomi/MiMo-V2.6-Flash (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE tuned for long-horizon agentic coding at mid-tier pricing; the smaller, cheaper sibling of MiMo V2.6 Pro.
- **Provider / access:** Xiaomi API `xiaomi/mimo-v2.6-flash` (Chat Completions). No Zen Free ID for this slug; the Zen free tier lives in `mimo-v2.6-free/`.
- **Release / knowledge:** 2026-09-22 release (Xiaomi model card / announcement); knowledge cutoff not disclosed
- **IDs:** `xiaomi/mimo-v2.6-flash` (no Free ID exists on Zen for this slug)
- **Context window:** 1M total tokens (vendor spec, via curated meta; max output split not disclosed)
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calls yes; JSON mode yes (vendor spec)
- **Pricing (as of 2026-09-29):** Paid $0.14/$0.28 per 1M in/out, cached input ~$0.0028 (Xiaomi API); no $0 Zen tier for this slug
- **Architecture:** 309B total / 15B active sparse MoE, MIT open weights (vendor)

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.6 (**general agent**): 52.3% (Xiaomi model-card table, via promptblueprints 2026-09-21; beats Claude Opus 5 at 50.3% on same table)
- Terminal-Bench 2.1: **87.6%** (Xiaomi model-card table, via themodelgap 2026-09-22 / minirouter; vs Pro 89.9%, Opus 5 89.1%, GPT-5.6 Sol 88.8% on same table; no independent tbench.ai listing found)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (Flash has no GDPval value in Xiaomi table; no Artificial Analysis page — URL returned 404 checked 2026-09-22)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **73.6%** (Xiaomi model-card table, via themodelgap / orcarouter 2026-09-22; vs Pro 76.9%, Opus 5 80.6% on same table; no independent toolathlon.xyz listing found)
- OSWorld-Verified (**general agent, provisional**): 80.8% (Xiaomi model-card table, via computingforgeeks; vs Pro 82.0%, Opus 5 83.4%)
- Terminal-Bench 4.0 (**general agent, provisional**): 28.8% (Xiaomi model-card table, via computingforgeeks; vs Pro 34.9%, Opus 5 49.0%)
- CyberGym (**security agent, provisional**): 95.1% (Xiaomi model-card table, via tabbit 2026-09-22; vs Pro 94.0%)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA page for Flash, 404; BenchLM compare page lists 12 covered benchmarks with null overall as of 2026-09-25)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Agents' Last Exam (**professional-work proxy, provisional**): 27.6% (Xiaomi model-card table, via themodelgap 2026-09-22; vs Pro 31.6%, Opus 5 31.6%, GPT-5.6 Sol 30.8%)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: DeepSWE v1.1 **67.9%** in card table (65.7% as RL-run endpoint up from 48.8% in announcement text; Xiaomi self-reported, via tabbit / themodelgap 2026-09-22; vs Pro 71.9%, Opus 5 74.0%, SWE-2 73.0%); MiMo Code Bench **61.2%** (vs Pro 63.2%, Opus 5 68.6%); ProgramBench **26.0%** (vs Pro 26.5%, Opus 5 37.0%); MiMo Visual Coding **71.5%** (vs Pro 72.3%, Opus 5 70.0%); JobBench **61.2%** (vs Pro 62.0%)

Long context:

- No long-context retrieval reported (no MRCR / RULER / GraphWalks value at window length found; 1M window is vendor spec only)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.6% near frontier plus Toolathlon 73.6%, AutomationBench 52.3% beating Opus, and OSWorld 80.8%; capped by TB4.0 28.8% gap to Opus 49.0%.
- **Reasoning: 72/100.** Only proxy is Agents' Last Exam 27.6% below Pro/Opus 31.6%; capped by zero verified GPQA, HLE, LCR, CritPt, or AA Index scores.
- **Context window: 95/100.** 1M total hits the top tier; capped at 95 with no measured ≥512K retrieval score to grant 100.
- **Multimodal: 92/100.** Audio+video+image in with text-only out; capped below 100 by text-only output and MiMo Visual Coding 71.5%.
- **Coding: 83/100.** DeepSWE 67.9% plus visual-coding 71.5% beating Opus 70.0%; capped by ProgramBench 26.0% and the DeepSWE gap to Opus 74.0%.
- **Cost efficiency: 97/100.** $0.14/$0.28 is near-free-tier pricing at roughly a third of Pro input price; capped below 100 as paid rather than $0.
- **Overall Score: 86/100.** Mean of the five non-cost dims (86+72+95+92+83)/5 = 85.6; best fit as a value long-horizon coding agent when Pro is overkill.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (Xiaomi model card via aggregators, Artificial Analysis absence check, BenchLM compare); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
