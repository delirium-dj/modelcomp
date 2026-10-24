# GLM-4.7-Flash — findings by Step 5 Preview

- Source: Zhipu AI / Z.ai (`glm-4.7-flash`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** Zhipu's MIT-licensed 30B-A3B open-weights text MoE for local deployment — fast (85 tok/s, 1.24 s TTFT) and strong on SWE-bench for its size, though Artificial Analysis flags it as deprecated in favour of GLM-5.
- **Provider / access:** self-hostable, MIT weights at `huggingface.co/zai-org/GLM-4.7-Flash`; also live on OpenRouter as `z-ai/glm-4.7-flash`. models.dev records 30 providers at $0.00/$0.00. Not in the OpenCode Console/Zen catalog.
- **Release / knowledge:** released **2026-01-19** (models.dev, both release and updated dates; Artificial Analysis agrees on Jan 19, 2026). Knowledge cutoff not disclosed.
- **IDs:** `zai-org/GLM-4.7-Flash` (Hugging Face); `zhipuai/glm-4.7-flash` (models.dev); `z-ai/glm-4.7-flash` (OpenRouter).
- **Context window:** **200,000 tokens** total with **131,072 max output** (models.dev, HF eval params, Artificial Analysis — all three agree).
- **Modalities:** **text in, text out** — explicitly *not* multimodal, per Artificial Analysis's model page. Reasoning model; tool calling and structured output both supported (τ²-Bench is reported, so tool use is measured).
- **Pricing (as of 2026-10-24):** **$0.00 / $0.00** per 1M (models.dev) because the weights are open and self-hostable. A paid route exists at **$0.07 in / $0.40 out** per 1M (Artificial Analysis's 3-provider median, blended $0.06, 86% cache discount). A sibling `glm-4.7-flashx` is separately listed on models.dev at $0.06/$0.40 **sharing the same Hugging Face weights URL**, which is itself notable.
- **Architecture:** open weights, **MIT license**. **30B-A3B MoE** (HF card) vs **31B total / 3B active** (Artificial Analysis) vs "31B params" (HF sidebar) — the card's own description is the most specific. 977,416 downloads last month on Hugging Face.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **75.2** (Zhipu HF card; independently confirmed at 75.2 by the model's own HF eval-results widgets)
- AIME 2025: **91.6** (Zhipu HF card)
- HLE: **14.4** (Zhipu HF card; confirmed at 14.4 by the HF eval-results widgets)
- Artificial Analysis Intelligence Index: **15 (estimated), ranked #18 of 141** (Artificial Analysis)
- SciCode, MMLU-Pro, CritPt, LCR/MLCR: no verified public score found.

Agent / tool use:

- **τ²-Bench: 79.5** (Zhipu HF card) — the strongest agentic result for this model.
- BrowseComp: **42.8** (Zhipu HF card)
- Terminal-Bench: **no verified public score found.** The HF card mentions Terminal Bench only as an evaluation *setting* (temp 0.7, top-p 1.0, max 16,384) rather than a result, and Artificial Analysis's per-benchmark figures for Terminal-Bench 4.0 are chart-only, so no number is reported.
- Tau3-Banking: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- BFCL: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- Coding Agents Index: no verified public score found.

Coding:

- **SWE-bench Verified: 59.2** (Zhipu HF card; confirmed at 59.2 by the HF eval-results widgets)
- LiveCodeBench v6: **64.0** (Zhipu HF card)
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found.
- Card comparators for context: measured against Qwen3-30B-A3B-Thinking-2507 and GPT-OSS-20B.

Long context:

- AA-LCR / MRCR / RULER: no verified public score found. The 200K window is agreed by all three sources; no retrieval-durability figure at a stated length was published.
- Artificial Analysis flags the model as **deprecated** with the note that "only 10k input workload benchmarked" — a direct statement that its long-context behaviour is under-measured.

Speed / cost:

- Output speed **85.2 tokens/second** (#30 of 64 in class) and TTFT **1.24 s** (Artificial Analysis).
- Cost per task: not published (AA reports N/A).
- Eval parameters used for the card's own numbers: default temp 1.0 / top-p 0.95 / max new tokens 131,072; SWE-bench and Terminal-Bench runs used temp 0.7 / top-p 1.0 / max 16,384.

### Conflicts recorded (not silently resolved)

1. **Parameter count:** 30B-A3B MoE (HF card description) vs 31B total / 3B active (Artificial Analysis) vs "31B params" (HF sidebar). The card's description is used. The spread is consistent with whether the vision-free text config counts non-expert parameters.
2. **Pricing:** $0.00/$0.00 (models.dev) vs $0.07/$0.40 (Artificial Analysis, 3-provider median). Both recorded; the open-weights $0 route is used for cost scoring.
3. **The FlashX sibling:** models.dev lists a separate canonical `glm-4.7-flashx` at $0.06/$0.40 that **shares the same Hugging Face weights URL** as `glm-4.7-flash`. Two distinct price points on one set of weights is either a serving-profile distinction or a catalog artifact; it is flagged here rather than resolved, and it does not affect this folder's scoring.
4. **Lifecycle status:** Artificial Analysis marks this model **deprecated** and recommends GLM-5. It remains downloadable (977k monthly downloads) and MIT-licensed, so this is a support-status note rather than an availability one.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-Bench at 79.5 is a strong agentic-tool result for a 30B-A3B model and BrowseComp at 42.8 shows real browse-and-retrieve ability, but Terminal-Bench — the benchmark this project weights most heavily for tool use — is entirely unpublished (the HF card uses it only as an eval setting, and AA's figures are chart-only), and Tau3, GDPval-AA, BFCL, Claw-Eval, the Coding Agents Index and Toolathon are all absent. Scored 68 on measured competence, capped below 75 by the missing terminal evidence.
- **Reasoning: 66/100.** AIME 2025 at 91.6 is genuinely strong and GPQA Diamond at 75.2 sits at the top of the 60-80% mid band, but HLE at 14.4 is a serious weakness — far below the methodology's 40% frontier reference — and the AA Intelligence Index of 15 (#18/141, estimated) is a low-field composite. The AIME/HLE split is the widest in this file and is why the score is pinned at 66 rather than in the high 70s: strong competition math, weak open-domain knowledge.
- **Context window: 72/100.** 200,000 tokens with 131,072 max output sits exactly at the methodology's 200K-500K band floor (200K = 70), lifted slightly because the max output limit itself is unusually large. Capped at 72 because AA-LCR is unpublished, AA explicitly flags that only a 10k-input workload was benchmarked, and there is no MRCR/RULER figure at any length — so the window is documented and its durability is explicitly under-measured by AA's own admission.
- **Multimodal: 15/100.** Text in, text out — Artificial Analysis states plainly that this model is not multimodal. That is the methodology's text-only band (10-20), at the top of it because the model is text-only by design rather than by limitation.
- **Coding: 62/100.** SWE-bench Verified at 59.2 is a solid mid result for a 30B-A3B local model and LiveCodeBench v6 at 64.0 corroborates it, but both are mid-band rather than frontier (the methodology's frontier reference is DeepSWE 74%+ / TB2.1 85%+), and SciCode, DeepSWE, Vibe Code Bench and Terminal-Bench are all unpublished. Scored 62: real, measured, mid-band coding with no evidence of more.
- **Cost efficiency: 98/100.** MIT open weights at $0.00/$0.00 on models.dev, self-hostable, with 85.2 tok/s decode and a 1.24 s TTFT — the methodology's "$0 = 100" rule applies directly. Held at 98 rather than 100 only because the metered route that does exist is $0.07/$0.40 (above the ~$0.10/$0.20 band) and AA flags the model deprecated with GLM-5 recommended, which is a mild forward-looking risk rather than a price one.
- **Overall Score: 57/100.** Mean of the five quality dims (68 + 66 + 72 + 15 + 62 = 283 ÷ 5 = 56.6, half-up → 57). Best fit: free, MIT-licensed, single-host local coding and tool use where 200K context and SWE-bench-class ability at zero licence cost beat raw capability. Worst fit: anything multimodal, anything needing HLE-class open-domain knowledge, and anything depending on long-context retrieval — which Artificial Analysis says was only benchmarked to 10k input.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (Zhipu's official Hugging Face model card and its eval-results widgets, models.dev's Zhipu catalog, and Artificial Analysis's model page with its independent Intelligence Index measurement), with OpenRouter and the Zhipu docs checked for availability; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — parameter count (30B-A3B vs 31B/3B vs 31B), pricing ($0.00 vs $0.07/$0.40), and a sibling `glm-4.7-flashx` that shares the same weights URL at a different price. Artificial Analysis flags the model deprecated and states only a 10k-input workload was benchmarked, which is the single largest caveat on its long-context claims.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
