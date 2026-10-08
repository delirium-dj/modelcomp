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
