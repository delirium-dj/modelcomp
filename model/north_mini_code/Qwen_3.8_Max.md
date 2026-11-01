# North Mini Code — findings by Qwen 3.8 Max

- Source: Cohere (`CohereLabs/North-Mini-Code-1.0`; AA `north-mini-code`; OpenRouter `cohere/north-mini-code`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **North Mini Code** is **Cohere's first developer-focused model** (June 2026), an **Apache-2.0 open-weight 30B-total / 3B-active MoE built specifically for agentic coding**, **text-only, 256K context / 64K output**, and — decisively — **completely free** ($0/$0 on OpenRouter's `:free` route + the Cohere API row, plus free self-host). It earns its place on one genuinely **independent** metric: **Artificial Analysis' Coding Index 33.4**, which Cohere (quoting AA) notes **beats Qwen3.5-35B-A3B, Gemma 4-26B-A4B, Devstral Small 2 and even larger Nemotron 3 Super / Mistral Small 4 / Devstral 2 in its size class** — with a matching **SWE-bench Verified 61.0% pass@1 (via mini-SWE-agent)** from just 3B active parameters. The honest shape: a **specialist code agent, not a planner** — its **general ceilings are low** (curated tradeoff: **τ²-Bench 37.4, HLE 11.1, AutomationBench 1.5**), the **AA Intelligence Index is N/A** (no v5.0 composite), and most of the granular benchmark set (Terminal-Bench v2, LiveCodeBench v6, SciCode, human-eval win-rate) is **vendor-run and presented in chart images**. It is a **real, distinct, downloadable artifact with a strong free-tier value proposition** — scored, and landing **just above the curated line**.

## Model card

- **Name:** North Mini Code (North-Mini-Code-1.0)
- **Short description:** Cohere's first developer model — a sparse-MoE agentic-coding specialist (30B-A3B), multi-harness robust (SWE-agent / mini-SWE-agent / OpenCode), trained with cascaded SFT + verifiable-reward RL.
- **Provider-access:** OpenCode, **Cohere API**, Hugging Face weights (BF16 + FP8 quantized), **OpenRouter free route** (`cohere/north-mini-code:free`). Apache 2.0 → free self-host.
- **Release-knowledge:** Released **9 Jun 2026**; first of a new Cohere "North" family (North Micro Vision VLM, Cohere Transcribe Arabic followed).
- **IDs:** `CohereLabs/North-Mini-Code-1.0` · OpenRouter `cohere/north-mini-code`.
- **Context window:** **256,000 total / 64,000 max output** (AA + OpenRouter + meta agree); trained on a 64K→128K "long-to-longer" SFT cascade.
- **Modalities:** **Text in / text out only** → Multimodal scored at the text-only convention.
- **Pricing:** **$0 / $0** on the OpenRouter free route + Cohere API free tier; **Apache-2.0 weights self-host free**.
- **Architecture:** decoder-only sparse MoE, **30B total / 3B active**, **128 experts / 8 active per token** (SwiGLU FFN experts, sigmoid router), 1 dense layer then sparse; **interleaved sliding-window (RoPE) + global no-positional-embedding (NoPE) attention in a 3:1 ratio**; **interleaved reasoning + JSON-schema tool use**.

### Raw benchmarks found

> Provenance: **one independent composite (AA Coding Index) + vendor agentic set.** The **AA Coding Index 33.4** is a genuine Artificial Analysis measurement (reported via the Cohere blog quoting AA); the **AA Intelligence Index is N/A** (no public-API v5.0 composite — the AA page shows only Speed/Cost). **SWE-bench Verified 61.0 / Terminal-Bench v2 / LiveCodeBench v6 / SciCode / human-eval win-rate** are **Cohere's own release-eval numbers** (Figure 1 is a chart image — individual competitor cells untranscribable). **Competitor scores** (Qwen3.5-35B-A3B, Gemma 4 26B-A4B, Devstral Small 2, Nemotron 3 Super, Mistral Small 4, Devstral 2) are **rivals — never credited to North Mini Code**.

**Coding / agentic (mixed):**
- **AA Coding Index 33.4 (INDEPENDENT, via AA)** — headline; Cohere: outperforms same-size and larger open coding models listed above.
- **SWE-bench Verified 61.0% pass@1** (mini-SWE-agent harness, VENDOR) — strong for 3B active; **80.2% pass@10** at the SFT stage.
- **Terminal-Bench v2 ~55.1% pass@10** (SFT; RLVR added +7.9% absolute TB, +3.0% SWE; VENDOR); Terminal-Bench Hard run with Terminus-2 per AA methodology.
- **LiveCodeBench v6 / SciCode** tracked (chart image; exact cells not transcribable).
- **Cohere internal human eval**: final RLVR checkpoint **66.1% aggregate win rate vs its own SFT-only checkpoint** (85 samples, code-edit strongest) — self-vs-self, not absolute capability.

**Reasoning / knowledge (weak):**
- **HLE 11.1%**, **τ²-Bench 37.4%**, **AutomationBench 1.5%** (curated tradeoff) — low general-reasoning / planning ceiling; consistent with "code model, not a planner."
- No **GPQA / AIME / MMLU** published.

**Vision / multimodal:** none — text-only.

**Long context:** 256K served; no MRCR / needle benchmark published.

**Speed / cost (NOT scored dimensions):** AA **69.5 tok/s, #37/62** (2-of-4, *slower* than the 88 median — the free tier is not a fast endpoint); **cost $0.00 in / $0.00 out** (free). Free availability is the real differentiator, not throughput.

**Meta-verification:** curated meta **accurate across the board** — 30B/3B Apache-2.0, 256K/64K, SWE-Verified 61.0, AA Coding Index 33.4, free, weak agentic/reasoning ceilings (τ² 37.4 / HLE 11.1 / AutomationBench 1.5) — all confirmed against AA page + Cohere blog. No corrections required.

### Normalized scores (1–100)

- **Tool use: 58/100.**
- **Reasoning: 54/100.**
- **Context window: 62/100.**
- **Multimodal: 50/100.**
- **Coding: 68/100.**
- **Cost efficiency: 95/100.**
- **Overall Score: 58/100.**

> Overall = half-up mean of the five non-cost dimensions (58 + 54 + 62 + 50 + 68) / 5 = 292 / 5 = **58.4 → 58**. Curated average is **57.4** → my divergence **+0.6** (the independent AA Coding Index 33.4 + free tier justify a slight premium; the low HLE/τ²/AutomationBench ceilings keep reasoning and tool use modest).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Cohere HF launch blog `introducing-north-mini-code` (9 Jun 2026)** — 30B/3B MoE, 128 experts/8 active, sliding-window+global NoPE 3:1 attention, 2-stage SFT + CISPO RLVR over 70k verifiable tasks / ~5k repos, **AA Coding Index 33.4** (vs Qwen3.5-35B-A3B / Gemma4 / Devstral Small 2 / Nemotron 3 Super / Mistral Small 4 / Devstral 2), SWE-Verified 61.0 pass@1 (mini-SWE-agent) / 80.2 pass@10, TB v2 55.1 pass@10, human-eval 66.1% win vs SFT, Apache 2.0 BF16+FP8; **Artificial Analysis `north-mini-code`** — profiles the **Reasoning** variant, **Intelligence Index N/A** (no public-API composite), **Speed 69.5 tok/s #37/62 (2/4, slower than 88 median)**, **Cost $0.00/$0.00**, **256k**, 30B/3B, Apache 2.0, text-only; **OpenRouter `cohere/north-mini-code:free`** — 256K/64K, interleaved reasoning + JSON tool use, free route, open-weight; **Cohere docs + llm-stats + Sebastian Raschka analysis** corroborate specs/benchmarks). AA **Coding Index** independent; the granular agentic set is vendor.
- Future sources: refresh when **AA publishes a v5.0 Intelligence Index** for North Mini Code (currently N/A) and when its **Terminal-Bench / LiveCodeBench / SciCode cells are transcribed** out of the Figure-1 chart image. **Guards applied:** (1) **all competitor numbers (Qwen3.5-35B-A3B, Gemma 4, Devstral Small 2/2, Nemotron 3 Super, Mistral Small 4) are rivals**, never credited to North Mini Code; (2) the **SWE 80.2 / TB 55.1 "pass@10" are SFT-stage / multi-attempt figures — not conflated with the 61.0 pass@1 headline**; (3) the **66.1% human-eval is the RLVR checkpoint vs Cohere's OWN SFT checkpoint** (relative, not absolute capability); (4) **AA Intelligence Index N/A ≠ good/bad** — only the **AA Coding Index 33.4** and Speed/Cost are measured; (5) **text-only → Multimodal 50**; (6) **raw speed (69.5 tok/s, slower-than-median free endpoint) is NOT a scored dimension**; (7) distinct from **North Micro Vision** (Cohere's separate 2.4B VLM) and the rest of the North family. **Cost efficiency (95) scored but excluded from Overall.**
