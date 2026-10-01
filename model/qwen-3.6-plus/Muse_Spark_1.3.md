# Qwen 3.6 Plus — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.6 Plus (`qwen3.6-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's Apr 2026 Plus flagship (Qwen3.6 native vision-language series): major gains over 3.5 in agentic coding, front-end/vibe coding, and multimodal recognition/OCR/localization; always-on chain-of-thought with thinking preservation across turns; 78.8% SWE-Verified and 61.6 Terminal-Bench 2.0 at ~1/12th Claude cost.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.6-plus`, snapshot `qwen3.6-plus-2026-04-02`); OpenRouter (`qwen/qwen3.6-plus`, incl. free preview); TokenMix; DashScope; Qwen Code CLI / Qwen Agent. OpenCode Zen `opencode/qwen-3.6-plus`.
- **Release / knowledge:** Released 2026-04-02 (snapshot date; OpenRouter + benchable rows; qwen.ai blog Apr 1). Knowledge cutoff not published in fetched sources — no verified cutoff found.
- **IDs:** `qwen3.6-plus` (Model Studio); `qwen/qwen3.6-plus` (OpenRouter); `opencode/qwen-3.6-plus` (Zen catalogue / meta.json)
- **Context window:** 1,000,000 total (max input 991,808 / max output 65,536; thinking mode 983,616 in, 81,920 CoT) — verified via Model Studio docs page. Flat pricing token 1 to 1M (no long-context surcharge per tokenmix).
- **Modalities:** Text and image in (native vision-language; enhanced object recognition/OCR/localization per Model Studio docs); text out; reasoning always-on with thinking preservation; tool calls yes (agentic-training rollouts, function calling + JSON mode per tokenmix)
- **Pricing (as of 2026-10-01):** $0.325 per 1M input / $1.95 per 1M output (OpenRouter; Alibaba intl $0.276/$1.651 base tier, $1.101/$6.602 upper tier); preview routes $0.28/$1.66 (TokenMix) and free (OpenRouter preview, rate-limited). Scored on $0.325/$1.95 production pricing.
- **Architecture:** Proprietary hybrid linear-attention + sparse MoE (undisclosed params); 5-chained-tool-call competence envelope per tokenmix (plan coherence degrades past it)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **61.6** (tokenmix.ai review table; leads Claude 4.5 Opus 58.4 and GPT-5.4 60.1 on agentic coding)
- Terminal-Bench Hard (AA subset): **43.9%** (OpenRouter page, Artificial Analysis run — harder slice, not the TB2.0 number)
- Tau2-Bench Telecom: **97.7%** (OpenRouter page, Artificial Analysis run — elite service workflows)
- GDPval-AA: **23.8%** (OpenRouter page, Artificial Analysis run — weak knowledge-work slice, caps the dimension)
- IFBench: **75.2%** (OpenRouter page, Artificial Analysis run — instruction following)
- Tau3-Banking: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.2%** (OpenRouter page, Artificial Analysis run)
- HLE: **27.8%** (OpenRouter page, Artificial Analysis run)
- AA-LCR: **78.3%** (OpenRouter page, Artificial Analysis run — measured long-context reasoning)
- CritPt: **2.9%** (OpenRouter page, Artificial Analysis run — very weak critique/precision slice, caps the dimension)
- AA-Omniscience: **26.4%** accuracy / **65.4%** non-hallucination rate (OpenRouter page, Artificial Analysis runs)
- Artificial Analysis Intelligence Index: **no verified public score found**
- Omniscience composite: see AA-Omniscience rows above (no single composite published)

Coding:

- SWE-bench Verified: **78.8%** (OpenRouter page + tokenmix review; within 1pt of Claude Opus 4.6 79.4%, behind GPT-5.4 85.0%)
- Coding Index (AA): **54.5** (OpenRouter page, Artificial Analysis run)
- Design Arena Elos (front-end/vibe): **3D 1226 / AsciiArt 1129 / Code 1245 / DataViz 1241 / GameDev 1229 / SVG 1174 / UI 1242 / Website 1248** (OpenRouter page, Design Arena runs — consistent ~1200s front-end strength)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE / other: **no verified public score found**

Long context:

- AA-LCR: **78.3%** (same run as above — measured retention evidence for the 1M window)
- No verified MRCR / RULER / GraphWalks score found; tokenmix needle runs hold to ~400K with degradation past 600K (third-party, provisional)

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 61.6 (outright lead) plus Tau2 97.7% and IFBench 75.2% show strong agentic/service agency; capped by GDPval-AA 23.8%, TB-Hard 43.9%, and missing Tau3/Claw/Toolathon/MCP.
- **Reasoning: 78/100.** GPQA 88.2% near-frontier with HLE 27.8% and AA-LCR 78.3%; capped hard by CritPt 2.9% and Omniscience accuracy 26.4% plus missing Index composite.
- **Context window: 95/100.** 1M ceiling (991K in / 65K out, 81.9K CoT) with measured AA-LCR 78.3% lands mid ≥1M band; flat pricing to 1M is a cost feature scored separately; capped below 100 by sub-98% far-end recall.
- **Multimodal: 72/100.** Text + image in with documented OCR/object-localization gains fits above the +image-in band middle; video input unconfirmed for this exact ID and no MMMU number — capped.
- **Coding: 85/100.** SWE-Verified 78.8% near-Opus plus Coding Index 54.5 and seven Design Arena front-end Elos ~1174-1248 show frontier-adjacent full-stack coding; capped by missing LiveCode/SciCode/Vibe/DeepSWE.
- **Cost efficiency: 94/100.** $0.325/$1.95 per 1M interpolates above the ~$0.60/$2.20 ~92 tier toward the ~$0.10/$0.20 band (cache $0.0325, no long-context surcharge, free preview routes); ~12x cheaper than Claude Opus-class on comparable work.
- **Overall Score: 81/100.** Mean of the five quality dims (76+78+95+72+85)/5 = 81.2; best fit as cost-effective 1M-context agentic-coding default; escalate past 5 chained tool calls or for max-reasoning stakes.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (Alibaba Cloud Model Studio qwen3.6-plus docs + pricing, OpenRouter model page with AA + Design Arena tables, tokenmix.ai review 2026-04-22 with comparison table, benchable.ai spec page, AlibabaCloud-Official/Qwen3.6 GitHub release log, qwen.ai 3.6 blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
