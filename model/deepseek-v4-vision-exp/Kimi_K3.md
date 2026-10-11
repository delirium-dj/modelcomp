# DeepSeek V4 Flash Vision Exp — findings by Kimi K3

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (`deepseek-v4-vision-exp`; HF `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** DeepSeek's first experimental multimodal model in the V4 family — V4-Flash architecture + vision modules via continued training. ~305B params (BF16/FP8), MIT license, with an official head-to-head table vs DeepSeek-V4-Flash-0731 and Claude Opus 4.8 on the HF model card. Now also served on OpenCode Zen (~#12 weekly, 62% retention).
- **Provider / access:** Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`, MIT); serve via vLLM/SGLang (DSpark speculative decoding); hosted inference via Novita and others; **OpenCode Zen route `opencode/deepseek-v4-flash-vision-exp` live** (OpenCode Data, ~#12 rank).
- **Release / knowledge:** Released 2026-08-21 per the OpenCode Data catalog (my first pass used the HF createdAt 2026-08-31 — ten-day discrepancy, catalog governs); knowledge cutoff not stated.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` (HF); `deepseek/deepseek-v4-flash-vision-exp` (OpenCode Data). No Zen Free ID.
- **Context window:** 1M tokens; max output **384K** (OpenCode Data catalog — RESOLVES my first-pass "unverified for this checkpoint"; the family-1M assumption confirmed).
- **Modalities:** image + text in → text out (catalog confirms); reasoning (deepseek_v4 reasoning parser); tool calls; JSON mode via serving stack.
- **Pricing (as of 2026-10-11):** Hosted: $0.30/M input, $1.20/M output, $0.006 cached (OpenCode Data catalog — verified now, identical to V4.1 Flash); MIT open weights → free self-host.
- **Architecture:** ~305B params MoE with DFlash attention, Hyper-Connections, DSpark forward path (HF card); MIT (open weights confirmed on OpenCode Data).

### Raw benchmarks found (official model card table; harness: DeepSeek Harness minimal mode, max reasoning effort, temp 1.0, top_p 0.95)

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (vs V4-Flash-0731 82.7, Opus 4.8 85.0) (HF card via OpenCode Data)
- Toolathlon-Verified: **75.9%** (vs 70.3 / 76.2) (HF card; matches OpenCode transcription)
- CyberGym: **75.3%** (vs 76.7 / 78.3) (HF card)
- AutomationBench (Public): **25.7%** (vs 25.1 / 27.2) (HF card)
- Agents' Last Exam (multimodal): **27.3%** Pass (HF card; matches)
- ApexBench (Pass@1, multimodal agentic): **36.5%** (vs 26.2† / 39.4) (HF card)
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- No GPQA/HLE/LCR/CritPt rows on the official card for this checkpoint — those exist for sibling V4/V4.1 models but are not claimed here. no verified public score found.
- AA Intelligence Index / Omniscience: no verified public score found.

Coding:

- DeepSWE: **59.3%** (vs 54.4 / 58.0) (HF card; corroborated by HF eval-results)
- NL2Repo: **57.7%** (vs 54.2 / 69.7) (HF card)
- DSBench-Hard: **63.6%** (vs 59.6 / 71.7) (HF card)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window catalog-verified (new this pass); **no long-context retrieval reported** on the card.

Multimodal:

- Chartography: **64.3%** (vs — / 65.0 for Opus 4.8) (HF card)
- ZeroBench (Pass@5): **35.0%** (vs 34.0 Opus 4.8) (HF card)
- ApexBench 36.5% / Agents' Last Exam 27.3% (multimodal agent rows above)

### Normalized scores (1–100)

- **Tool use: 80/100.** Unchanged: TB 2.1 83.9%, Toolathlon 75.9% — near Opus 4.8 parity; capped by weaker NL2Repo/DSBench-Hard vs Opus 4.8 and no third-party GDPval/Tau rows.
- **Reasoning: 55/100.** Unchanged: no public GPQA/HLE/LCR rows for this exact checkpoint; capped by absent hard-reasoning numbers.
- **Context window: 80/100.** Raised from 60: the 1M window + 384K output is now catalog-verified (previously a family assumption); capped by zero measured retrieval-at-length.
- **Multimodal: 78/100.** Unchanged: verified vision gains (ApexBench +10.3 over base, Chartography 64.3%, ZeroBench 35.0%); capped by modest absolute numbers and text-only output.
- **Coding: 72/100.** Unchanged: DeepSWE 59.3%, NL2Repo 57.7%, DSBench-Hard 63.6% — solid but behind Opus 4.8 on repo-level tasks per the card itself.
- **Cost efficiency: 95/100.** Verified: MIT open weights; $0.30/$1.20 hosted (Zen), free self-host — cheapest vision-capable path on the V4 stack.
- **Overall Score: 73/100.** Mean of the five quality dims (80+55+80+78+72)/5 = 73.0 → 73 (raised from 69 on the verified 1M window). Best fit: open multimodal agent experiments on the DeepSeek V4 stack; production text-critical work should prefer measured V4.1 checkpoints.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `deepseek/deepseek-v4-flash-vision-exp` — catalog release/pricing/window/modalities verification and HF-card benchmark transcription; official HF model card + eval-results tags from first pass). Second pass over my 2026-09-24 file: verified the 1M window (raising Context), noted the release-date discrepancy (catalog 08-21 vs HF createdAt 08-31), verified hosted pricing. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
