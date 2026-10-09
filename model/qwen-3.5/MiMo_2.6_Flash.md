# Qwen 3.5 — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud Community launch post (Feb 17, 2026), Alibaba Group press release, CNBC, MarkTechPost, GitHub QwenLM/Qwen3.5, OpenRouter, repo meta (tier unconfirmed — provisional)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 — **Alibaba's Qwen 3.5 flagship generation** (first release **2026-02-16**, Chinese New Year), beginning with **Qwen3.5-397B-A17B** — open-sourced under Apache-style terms, "also named Qwen3.5-Plus" when hosted on Model Studio. ⚠️ **The tracked tier for this queue entry is UNCONFIRMED** (meta: "several facts here are family-proxy provisional") — this report therefore scores the **family proxy** (397B-A17B / hosted Plus-class rows) with an explicit uncertainty discount; sibling entries `qwen-3.5-plus` and `qwen-3.5-397b` are scored separately elsewhere.
- **Short description:** "**Towards Native Multimodal Agents**": a **397B-total / 17B-active sparse MoE with hybrid linear attention** (Gated Delta Networks, 3:1 ratio over 60 layers) delivering **8.6–19× decoding throughput** over prior generations while "matching the performance of the much larger Qwen3-Max (>1T params)" at far lower deployment cost. Natively vision-language trained by early fusion on trillions of vision-language tokens; **text + image + video in**, 201 languages/dialects (up from 119); MCP and complex function-calling; RL-environment scaling across BFCL-VITA-DeepPlanning-Tool-Decathlon-MCP-Mark. Follow-ons: 122B-A10B/35B-A3B/27B (Feb 24), 9B-0.8B (Mar 2), Qwen3.5-Omni (Mar 29).
- **Provider / access:** Hugging Face, GitHub, ModelScope (open weights); Alibaba Cloud Model Studio API (hosted **Qwen3.5-Plus**); Qwen Chat; OpenRouter (`qwen3.5-397b-a17b` $0.45/$3.00, `qwen3.5-flash-02-23` $0.065/$0.26, `qwen3.5-plus-*` $0.26–0.30/$1.56–1.80).
- **Release / knowledge:** 2026-02-16.
- **Context window:** **262,144 native (base)**; **hosted Plus/Flash 1M** (meta: "128K–1M family range, tracked tier unconfirmed").
- **Modalities:** **text, image, video in; text out** (natively multimodal).
- **Pricing:** meta — "low-cost Qwen tier, exact price unverified"; observed registry spread $0.065/$0.26 (flash) to $0.45/$3.00 (397B) per 1M.

### Raw benchmarks found

> Primary: Alibaba launch tables (self-reported, Qwen3.5-397B-A17B column vs
> GPT-5.2 / Claude-4.5-Opus / Gemini-3-Pro / Qwen3-Max-Thinking / K2.5-1T),
> plus Qwen3.5-Plus rows transcribed in the Qwen3.5-Omni blog. No AA/BenchLM
> entry for the bare generation — rows below are family-proxy for this queue item.

Agentic / tool use:

- **τ²-Bench: 86.7** (vs Opus-4.5 91.6, GPT-5.2 87.1), **BrowseComp: 69.0/78.6** (best-in-table!), BrowseComp-zh 70.3, WideSearch 74.0, BFCL-V4 72.9, VITA-Bench 49.7, MCP-Mark 46.1, Tool Decathlon 38.3, DeepPlanning 34.3.
- OSWorld-class row partial: computer-use rows present but truncated in fetched coverage.

Coding:

- **SWE-bench Verified: 76.4**, SWE-bench Multilingual 69.3, SecCodeBench 68.3, **Terminal-Bench 2: 52.5**, LiveCodeBench v6 83.6.

Reasoning & knowledge:

- **GPQA: 88.4** — just under the 90 reference (GPT-5.2 92.4, Gemini-3 Pro 91.9 above).
- **HLE: 28.7** (HLE-Verified 37.6; **HLE w/tool 48.3**) — misses 40 without tools; MMLU-Pro 87.8, SuperGPQA 70.4, MMLU-Redux 94.9, C-Eval 93.0.
- Math: **AIME26 91.3, HMMT Feb-25 94.8 / Nov-25 92.7**, IMOAnswerBench 80.9.

Multimodal:

- **MMMU 85.0, MMMU-Pro 79.0**, MathVision 88.6, MathVista 90.3, We-Math 87.9, CharXiv 80.8, OmniDocBench 90.8, OCRBench 93.1, AI2D 93.9, ScreenSpot Pro 65.6.
- Video: **VideoMME w/ sub 87.5 / w/o 83.7, VideoMMMU 84.7, MLVU 86.7, MVBench 77.6, LVBench 75.5**.

Long context:

- 1M hosted claim; **AA-LCR 62.0** (Qwen3.5-Plus-NoThinking, via Omni blog) and LongBench v2 60.2 — weak retrieval evidence.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ² 86.7 and best-in-table BrowseComp 69.0 are genuinely strong agentic rows; TB2 52.5, MCP-Mark 46.1 and mid DeepPlanning/Tool-Decathlon keep it out of the high-80s, and the tracked tier may not inherit the flagship's full stack.
- **Reasoning: 82/100.** Strong math (AIME 91.3, HMMT 94.8) and GPQA 88.4 near-reference, but HLE 28.7 (37.6 verified) misses 40 without tools and all rows are self-reported family-proxy for an unconfirmed tier.
- **Context window: 89/100.** 1M hosted claim (262K native) with only weak long-context proof (LCR 62.0, LongBench v2 60.2) — held under 90 by evidence quality, not window size.
- **Multimodal: 85/100.** Native text+image+video with deep coverage (MMMU-Pro 79, VideoMME 87.5, OCRBench 93.1, ScreenSpot Pro 65.6) — the generation's headline strength, scored at the upper image/video band minus a tier-confirmation notch.
- **Coding: 79/100.** SWE-V 76.4 and LCB 83.6 are respectable mid-band, but every coding reference misses (SWE-V <85, TB2 far under the frontier bar, no Coding-Index row).
- **Cost efficiency: 94/100** (excluded from Overall). "Low-cost tier": even the priciest observed variant ($0.45/$3.00) undercuts the $0.60/$2.20 ≈ 92 anchor, with flash-class pricing at $0.065/$0.26 — exact tracked-tier price unverified, flagged.
- **Overall Score: 83/100.** (82+82+89+85+79)/5 = 83.4 → 83 — the Qwen 3.5 generation's family proxy: native multimodal agents with best-in-table BrowseComp, τ² 86.7 and cheap MoE efficiency, discounted for self-reported-only evidence, weak long-context proof, sub-reference GPQA/HLE, and the meta's explicit warning that the tracked tier is unconfirmed.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — alibabacloud.com/blog/qwen3-5-towards-native-multimodal-agents_602894 (full benchmark tables + RL-scaling notes), alibabagroup.com press release (open-source 397B-A17B = "Qwen3.5-Plus", efficiency claims), CNBC (self-report caveat, hosted/open split), MarkTechPost (256K native/1M hosted, 8.6-19× throughput), GitHub QwenLM/Qwen3.5 (release timeline), Qwen3.5-Omni blog (Qwen3.5-Plus LCR 62.0 row), OpenRouter API (variant pricing/ctx), repo meta (tier-unconfirmed warning honored via explicit uncertainty discount). Scores are normalized 1–100 interpretations, not official vendor scores; all rows family-proxy per meta; family ordering checked against own Qwen 3.5-Plus (85), 3.6-Plus (85) and 3.7-Max (82) reports.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Qwen 3.5 — findings by Mimo v2.6 Flash

- Source: Alibaba/Qwen 3.5 (397B A17B flagship; hosted `qwen3.5-397b-a17b` / DashScope `qwen3.5-397b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (flagship 397B-A17B release of the Qwen 3.5 family; hosted variants Qwen3.5-Plus / Qwen3.5-Flash are separate tiers of the same generation)
- **Short description:** Alibaba's Feb 2026 open-weights flagship that unifies the old Qwen3 text and Qwen3-VL vision lines into one natively multimodal MoE; top use case is cost-efficient frontier-class reasoning + coding. Not a variant/alias of another tracked entry.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope) and 9+ third-party hosts (DeepInfra, OpenRouter, Together, Novita, Scaleway…); OpenAI-compatible Chat Completions. Repo entry `opencode/qwen-3.5`.
- **Release / knowledge:** 2026-02-16 (morphllm release table; DeepInfra "released February 2026"); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-397b-a17b` (DashScope), `deepinfra/Qwen/Qwen3.5-397B-A17B`, `openrouter/qwen3.5-397b-a17b`; no Free $0 ID found on OpenCode Zen as of 2026-10-03.
- **Context window:** 262,144 tokens native (262K), extendable to 1M with YaRN on the hosted Plus route (DeepInfra model card, Requesty). Max output not published.
- **Modalities:** text + image + video in (native early-fusion vision — first open-weights Qwen with native vision, DeepInfra 2026-04-03); text out; reasoning/thinking mode yes; tool calling yes; JSON mode yes (most hosts).
- **Pricing (as of 2026-10-03):** flagship 397B ≈ $0.55–$0.60 in / $3.50–$3.60 out per 1M (costgoat OpenRouter $0.55/$3.50; BenchLM $0.60/$3.60); cheapest host DeepInfra $0.45 in; Qwen3.5-Plus $0.40/$2.40, Qwen3.5-Flash $0.10/$0.40 (BenchLM). Paid — no $0 tier found; standard pay-as-you-go.
- **Architecture:** 397B total / 17B active MoE, 512 experts (8 routed + 1 shared), open weights (DeepInfra).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **52.5%** (morphllm GLM-5 vs Qwen 3.5 comparison, 2026)
- BFCL v4 (tool use): **72.9** (same comparison)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (morphllm; corroborated by DeepInfra "88.4 on GPQA Diamond")
- MMLU-Pro: **87.8%** (DeepInfra 2026-04-03, "87.8% on MMLU-Pro")
- MMLU: **88.5%** (morphllm)
- AIME 2026 I: **91.3** (morphllm)
- MathVista: **90.3** (morphllm)
- HLE: no verified public score found
- LCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **45 / #3 among open-weights models** (DeepInfra 2026-04-03)

Coding:

- SWE-bench Verified: **76.4%** (morphllm; DeepInfra "76.4% on SWE-Bench Verified")
- LiveCodeBench v6: **83.6** (morphllm)
- HumanEval: ~85–90% (morphllm, approximate "~85%" claim — treated as proxy only)
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure published for the 262K window (no long-context retrieval reported)

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2 52.5% lands in the documented mid band (TB 45–60 → 50–70) and BFCL v4 72.9 is solid, but no Tau3/GDPval/Claw-Eval numbers exist, which caps the score at 65.
- **Reasoning: 80/100.** GPQA Diamond 88.4% is near-frontier (ref 90%+ → 90–100) and AIME 2026 91.3 / MMLU-Pro 87.8 confirm it, but HLE is unreported and the AA Intelligence Index sits at 45 vs the 60+ frontier ref, capping it at 80.
- **Context window: 72/100.** 262K native falls in the 200K–500K tier (65–84; 200K = 70); the 1M extension exists only on the hosted Plus route and no retrieval score at that length is published, so 72.
- **Multimodal: 80/100.** Native image + video input via early-fusion (DeepInfra), text-only output — the +video-in band is 75–90; no audio in and no non-text out keeps it at 80.
- **Coding: 85/100.** SWE-bench Verified 76.4% (top-20 class, near Claude Sonnet 4.6's 79.6) plus LiveCodeBench v6 83.6; missing SciCode/DeepSWE/Vibe rows cap it at 85.
- **Cost efficiency: 90/100.** ~$0.55–$0.60/$3.50–3.60 flagship pricing sits just above the ~$0.60/$2.20 ≈ 92 anchor with a heavier output leg; Flash tier at $0.10/$0.40 would score ~97 if that tier were evaluated.
- **Overall Score: 76/100.** (65 + 80 + 72 + 80 + 85) / 5 = 76.4 → 76 — best-fit as a low-cost open-weights frontier-class workhorse for multimodal reasoning and coding when 262K context suffices.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-03
- Method: public internet research (morphllm comparison, DeepInfra launch/benchmark posts, BenchLM pricing, costgoat/cloudprice/computeprices rate tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

