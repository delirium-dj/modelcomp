# Ling 3.0 Flash Fin Free — findings by DeepSeek 4.1 Flash

- Source: InclusionAI / Ant Group (`opencode/ling-3.0-flash-fin-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free (the Zen free alias of `inclusionai/ling-3.0-flash-fin`)
- **Short description:** Ant Group's first finance-enhanced Ling model — continued finance training of Ling 3.0 Flash (hybrid-linear 124B/5.1B MoE) for source-grounded financial research, valuation/spreadsheet work and tool-intensive banking workflows. It is a domain finetune, not a general capability upgrade: it matches its base on the Intelligence Index while spending many more output tokens.
- **Provider / access:** OpenCode Zen free tier (`https://opencode.ai/zen/v1`, OpenAI-compatible chat completions, thinking on by default); also OpenRouter (including a rate-limited free endpoint), Vercel AI Gateway, and DeepInfra for paid serving. Third-party coverage puts the free-access promotion window at ~2026-09-25.
- **Release / knowledge:** first hosted as a free preview 2026-08-28 (BenchLM launch snapshot); weights published 2026-09-03 (Hugging Face repo created 2026-09-03, MIT); open-sourcing announced 2026-09-09 at the Inclusion·Conference (Ant Group press release). Knowledge cutoff not published.
- **IDs:** `opencode/ling-3.0-flash-fin-free` (Zen, $0/$0); upstream `inclusionai/ling-3.0-flash-fin`; weights `inclusionAI/Ling-3.0-flash-Fin` (BF16, plus FP8/FP4 variants). The sibling `Ling 3.0 Flash VL` is a different (vision) model and is not this entry.
- **Context window:** 262,144 tokens (256K marketed) with a 32,768-token max output — Zen/Pi model record, Artificial Analysis and BenchLM's spec sheet agree.
- **Modalities:** text in / text out only; reasoning (thinking mode) on by default; tool calling supported through the `ling3` chat template/reasoning parser. No image, audio, video or PDF input.
- **Pricing (as of 2026-09-21):** **$0 / $0 on the evaluated Zen free tier** (Artificial Analysis also shows $0.00/$0.00). Paid fallback route: DeepInfra $0.06 / 1M in, $0.012 / 1M cached, $0.18 / 1M out. Zen's free-tier privacy notes warn that free-period prompts may be used to improve the model — that is the real price of $0.
- **Architecture:** open-weights MoE — **124B total, 5.1B active**, native hybrid linear attention 5:1 (35 KDA + 7 gated MLA layers), 512 routed experts + 1 shared, 8 activated, MIT license; BF16 checkpoint (HF safetensors: 64 shards, ~127.5B stored parameters including embeddings); context trained 8K → 32K → 256K.

### Raw benchmarks found

> Fin-specific rows are scarce by design — the vendor card publishes its seven finance suites as a chart image only — so the same-architecture base model (Ling 3.0 Flash) is cited where noted, always marked "base proxy".

Agent / tool use:

- Tau3-Banking (τ³-Banking): **41.0%** (0.410, rank 2 of 12 on llm-stats.com; self-reported harness — 11 of 12 leaderboard rows there are self-reported; ahead of Grok 4.5 at 33.0%, just behind Atria Dawn Preview at 41.2%)
- Finance Agent v2: **59.8%** (BenchLM sourced row)
- APEX-Agents: **29.2%** (BenchLM sourced row)
- SpreadsheetBench 2: **21.8%** (BenchLM sourced row)
- AA-Briefcase: **967 Elo**, rubric passes **23.5%**, Analytical Quality Elo **866**, Presentation Elo **1095** (Artificial Analysis, 2026-09-16)
- AutomationBench-AA: **7%** (Artificial Analysis) — guardrail-respecting business-app workflows; base Ling-3.0-flash-VL sibling scores 16%
- Terminal-Bench v4.0: **0%** (Artificial Analysis) — hard terminal tasks unsolved
- GDPval-AA v2: **1171 Elo** (Artificial Analysis; above MiniMax-M2.7 at 1087, ~50 Elo behind the vision-tuned sibling at 1225)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found** for this checkpoint (base proxy, BenchLM: MCP Atlas 65.5%, skillsBench 44.8%, BFCL v4 73.0%, Terminal-Bench 2.1 (Vals) 50.2% — provisional, different model)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23** (#3 of 65 in its class; class median 8) — AA model page and the 2026-09-16 release article; matches MiniMax-M2.7 while activating 5.1B vs 10B
- Artificial Analysis Finance & Accounting Index: **24** (same as Ling-3.0-flash-VL; AA, 2026-09-16)
- Business-knowledge accuracy **17%**, non-hallucination **67%** (i.e. 33% hallucination) vs the VL sibling's 11% / 81% (AA, 2026-09-16)
- Output-token use: **~67k output tokens per Intelligence Index task**, ~34% more than the VL sibling and 3.2× MiniMax-M2.7 (AA)
- GPQA Diamond / HLE / CritPt / LCR for this checkpoint: **no verified public score found** (base proxy, BenchLM Ling-3.0-flash: GPQA 85.0%, GPQA Diamond (Vals) 84.8%, HLE 22.7%, MMLU-Pro 82.0%, AIME26 93.2%, HMMT Feb 2026 87.0%, IFBench 74.5% — provisional; base composite 46.83/100, rank 140 of 230, "Estimated")
- FinFIRST (open benchmark built with CICC): released alongside the model, but the vendor card shows an unlabelled chart rather than numbers → **no verified score**
- FinSearchComp Verified / FinCRAFT: listed as evaluated on the vendor card (image only) → **no verified numeric score**

Coding:

- Fin-specific coding runs: **no verified public score found**
- Base proxy (same architecture, BenchLM Ling-3.0-flash): SWE-bench Pro **56.6%**, SWE Multilingual **72.4%**, SWE-bench (Vals) **65.2%**, LiveCodeBench (Vals) **84.0%**, LiveCodeBench v5 **82.8%**, SciCode **41.2%** — provisional, different model

Long context:

- No MRCR / RULER / GraphWalks retrieval figure is published for this checkpoint at any window length; the 262K window therefore has no measured recall curve behind it.
- Base proxy (BenchLM Ling-3.0-flash): WideResearch 73.6%, DRACO 70.4%, BrowseComp 72.2% — provisional.
- Terminal-Bench v4.0 **0%** (AA) is the only published long-horizon agentic datapoint for this checkpoint.

### Normalized scores (1–100)

- **Tool use: 66/100.** Tau3-Banking 41.0% (rank 2 of 12, ahead of Grok 4.5) and GDPval-AA v2 1171 Elo sit at the top of the methodology's mid band (Tau3 10–25%, GDPval 900–1200 → 50–70), but AutomationBench-AA 7%, Terminal-Bench v4.0 0%, APEX-Agents 29.2% and an AA-Briefcase rubric pass rate of 23.5% show hard multi-step tool work is still weak, which caps it well below agentic-frontier territory.
- **Reasoning: 60/100.** Intelligence Index 23 (class median 8, #3 of 65 in class) plus Finance & Accounting Index 24 land in the 20–35 mid band (55–65); what caps it is the 33% business-knowledge hallucination rate and the absence of any published GPQA/HLE figure for this checkpoint.
- **Context window: 72/100.** 262,144 tokens sits in the 200K–500K tier (200K = 70, 500K = 84), so a 256K window is just above the tier floor; no retrieval evidence at length exists for this checkpoint, which keeps it at the bottom of its band.
- **Multimodal: 15/100.** Text in / text out only — no image, audio, video or PDF path (AA technical spec; the vision capability lives in the separate Ling 3.0 Flash VL sibling).
- **Coding: 65/100.** Base-model proxies (LiveCodeBench 84.0% (Vals), SWE-bench Pro 56.6%, SWE-bench (Vals) 65.2%, SciCode 41.2%) match the methodology's "LiveCode 80+ but SciCode <40 → 65–75" profile; because no Fin-specific coding run is published, the score stays at the bottom of that range.
- **Cost efficiency: 100/100.** $0 / $0 on the evaluated Zen free tier (limited-time promo, free access reported through ~2026-09-25), with a $0.06/$0.18 per-1M paid fallback if the free-period data-usage caveat is unacceptable.
- **Overall Score: 55.6/100.** (66 + 60 + 72 + 15 + 65) / 5 = 55.6. Best fit: free, high-volume finance-style text pipelines — retrieval, period/definition reconciliation, spreadsheet and valuation drafting — at a 262K window; not a general agentic-coding pick.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-21
- Method: public internet research — primary sources `https://artificialanalysis.ai/models/ling-3-0-flash-fin`, `https://artificialanalysis.ai/articles/ant-group-releases-finance-focused-ling-3-0-flash-fin`, `https://benchlm.ai/models/ling-3-0-flash-fin`, `https://benchlm.ai/models/ling-3-0-flash`, `https://huggingface.co/inclusionAI/Ling-3.0-flash-Fin`, `https://llm-stats.com/benchmarks/tau3-banking`, `https://pi.dev/models/opencode/ling-3-0-flash-fin-free`; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

