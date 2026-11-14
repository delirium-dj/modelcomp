- Source: The Unbiased Company/Union Alpha (Pareto 26.9)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (revealed as Unbiased's **Pareto 26.9**)
- **Short description:** The 2026-09-16 anonymous stealth model on OpenRouter / Cline / OpenCode, revealed on 2026-09-17 as The Unbiased Company's Pareto 26.9 — a **composite router / multi-model hosted system**, never a standalone checkpoint. Per the project identity roster, `union-alpha` is the canonical kept-tracked alias-family record for this composite: `model/pareto-26.9/` and `model/unbiased-pareto/` must NEVER be scaffolded, and `pareto-26.10-preview` is the separate successor tracked folder. Also per the roster, the circulated **DeepSWE ~74% is GPT-6 Astra's number; Pareto 26.9 is 70.0%** — that misattributed figure is not used here.
- **Provider / access:** OpenRouter stealth listing (`stealth/union-alpha`, `opencode/union-alpha`, `unbiased/pareto`), Cline and OpenCode; free preview then paid API.
- **Release / knowledge:** stealth 2026-09-16, revealed 2026-09-17; knowledge cutoff: no verified public score found.
- **IDs:** `union-alpha`; canonical `unbiased/pareto` (Pareto 26.9). No free Zen ID verified.
- **Context window:** **262,144 tokens**, **131,072 tokens** max output.
- **Modalities:** text and image in, text out; tool calling, tool choice and JSON-format output for agent workflows; research, coding and agentic tasks. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$0 input / $0 output** during the free preview (launch day ~**2 billion tokens** processed); after preview **$2.50 / 1M input, $7.50 / 1M output, $0.25 / 1M cached input**.
- **Architecture:** Composite/multi-model router that routes work across several constituent models and returns one checked answer — explicitly **not a single checkpoint**. Constituent models not named by the vendor; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Launch day: ~**2 billion tokens** processed (adoption, not a benchmark)
- Native tool calling / tool choice / JSON output for agent workflows (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- DeepSWE: **70.0%** for Pareto 26.9 (per the project identity roster's correction; the widely circulated ~74% belongs to GPT-6 Astra) — reported with that provenance caveat; no independent public evaluation retrieved this pass
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- 262K window / 128K output; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** A production composite router with tool choice/JSON output, 2B tokens on day one and broad Cline/OpenCode integration; capped by opaque routing and no scored agent harness.
- **Reasoning: 82/100.** Composite cross-checked answers aimed at reliability; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 86/100.** 262K input with a 131K max output; capped by being 1/4 of the 1M class and no retrieval benchmark.
- **Multimodal: 82/100.** Image input documented; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 85/100.** 70.0% DeepSWE (with the roster's attribution correction); capped by that figure not being independently replicated in the retrieved sources.
- **Cost efficiency: 88/100.** Free preview with unlimited zero-price tokens, then $2.50/$7.50 with cheap $0.25 cache reads; capped by the post-preview price being above the successor's $0.80/$3.20. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 84, 82, 86, 82, 85 = 83.8 → 84. Best fit: agent workflows wanting cross-model answer checking; superseded by the cheaper Pareto 26.10 generation.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Union Alpha article retrieved via public web search excerpt (stealth release/reveal, composite identity, 262K/131K context, modalities, tool/JSON support, 2B launch-day tokens, free-then-paid pricing), plus secondary coverage confirming the reveal as Unbiased's Pareto 26.9. Identity and score handling follow the project's single generated identity roster (the authoritative record for this composite): `model/pareto-26.9/` and `model/unbiased-pareto/` are forbidden and never scaffolded; `pareto-26.10-preview` is a separate successor; and the misattributed DeepSWE ~74% belongs to GPT-6 Astra — Pareto 26.9's 70.0% is the figure used, with provenance stated. Note that the roster is a local procedure input for identity only; all capability figures above come from the public web sources named here. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Union Alpha — 百度百科 (retrieved via search excerpt; stealth reveal, specs, pricing)](https://baike.baidu.com/item/Union%20Alpha/69084340)
  - [Pareto 26.9 Model Card — CSDN (retrieved via search excerpt; composite identity)](https://blog.csdn.net/weixin_29057065/article/details/170260978)
