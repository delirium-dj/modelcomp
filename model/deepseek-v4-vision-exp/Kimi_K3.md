# DeepSeek V4 Flash Vision Exp — findings by Kimi K3

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (`deepseek-v4-vision-exp`; HF `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** DeepSeek's first experimental multimodal model in the V4 family — V4-Flash architecture + vision modules via continued training. ~305B params (BF16/FP8), MIT license, with an official head-to-head table vs DeepSeek-V4-Flash-0731 and Claude Opus 4.8 on the HF model card.
- **Provider / access:** Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`, created 2026-08-31, MIT); serve via vLLM/SGLang (DSpark speculative decoding); hosted inference via Novita and others.
- **Release / knowledge:** Released 2026-08-31 (HF createdAt); knowledge cutoff not stated on card.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` (no OpenCode Zen Free ID verified).
- **Context window:** not stated on the card — the base DeepSeek-V4-Flash family is 1M-class (benchlm lists 1M for V4.1 Flash); unverified for this checkpoint.
- **Modalities:** image+text → text (Image-Text-to-Text pipeline); reasoning (deepseek_v4 reasoning parser); tool calls (tool-call parser in vLLM recipe); JSON mode via serving stack.
- **Pricing (as of 2026-09-24):** open weights (MIT) → self-host; hosted prices vary by provider (no single verified rate in my sources).
- **Architecture:** ~305B params MoE with DFlash attention, Hyper-Connections, DSpark forward path (HF card repository description); MIT license.

### Raw benchmarks found (official model card table; harness: DeepSeek Harness minimal mode, max reasoning effort, temp 1.0, top_p 0.95)

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (vs V4-Flash-0731 82.7, Opus 4.8 85.0) (HF card)
- Toolathlon-Verified: **75.9%** (vs 70.3 / 76.2) (HF card)
- CyberGym: **75.3%** (vs 76.7 / 78.3) (HF card)
- AutomationBench (Public): **25.7%** (vs 25.1 / 27.2) (HF card)
- Agents' Last Exam (multimodal): **27.3%** Pass (vs 25.2† / 25.7) (HF card)
- ApexBench (Pass@1, multimodal agentic): **36.5%** (vs 26.2† / 39.4) (HF card)
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- No GPQA/HLE/LCR/CritPt rows on the official card for this checkpoint — those exist for sibling V4/V4.1 models but are not claimed here. no verified public score found.
- AA Intelligence Index / Omniscience: no verified public score found.

Coding:

- DeepSWE: **59.3%** (vs 54.4 / 58.0) — HF card; corroborated by HF eval-results (datacurve deep-swe 59.3)
- NL2Repo: **57.7%** (vs 54.2 / 69.7) (HF card)
- DSBench-Hard: **63.6%** (vs 59.6 / 71.7) (HF card)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- no long-context retrieval reported on the card.

Multimodal:

- Chartography: **64.3%** (vs — / 65.0 for Opus 4.8) (HF card)
- ZeroBench (Pass@5): **35.0%** (vs 34.0 Opus 4.8) (HF card)
- ApexBench 36.5% / Agents' Last Exam 27.3% (multimodal agent rows above)

### Normalized scores (1–100)

- **Tool use: 80/100.** Official Table: TB 2.1 83.9%, Toolathlon 75.9% — near Opus 4.8 parity; capped by weaker NL2Repo/DSBench-Hard vs Opus 4.8 and no third-party GDPval/Tau rows.
- **Reasoning: 55/100.** No public GPQA/HLE/LCR rows for this exact checkpoint; card claims "comparable performance on text-only agent tasks" vs V4-Flash-0731 (provisional proxy). Capped by absence of hard-reasoning numbers.
- **Context window: 60/100.** Context limit unverified for this checkpoint (family suggests 1M-class); no retrieval measurements published.
- **Multimodal: 78/100.** Verified vision gains: ApexBench +10.3 pts over the 0731 base, Chartography 64.3%, ZeroBench Pass@5 35.0%; capped by modest absolute numbers and text-only output.
- **Coding: 72/100.** DeepSWE 59.3%, NL2Repo 57.7%, DSBench-Hard 63.6% — solid but clearly behind Opus 4.8 on repo-level tasks per the card itself.
- **Cost efficiency: 95/100.** MIT open weights; self-host or cheap hosted inference.
- **Overall Score: 69/100.** Mean of the five quality dims (80+55+60+78+72)/5 = 69.0. Best fit: open multimodal agent experiments on the DeepSeek V4 stack; production text-critical work should prefer measured V4.1 checkpoints.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (official HF model card incl. vendor benchmark table + eval-results tags, HF API metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
