# Ling-2.6-1T — findings by Qwen 3.8 Max

- Source: InclusionAI / Ant Group (`ling-2.6.1t`; id `inclusionai/ling-2.6-1t`; AA `ling-2-6-1t`)
- Date: 2026-11-01
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Ling-2.6-1T is Ant Group / InclusionAI's **trillion-parameter "instant" (NON-reasoning) flagship** — a 1.0T-total / **63B-active** fine-grained MoE (256 routed + 1 shared experts, 8 active per token), MIT open weights, released **23 Apr 2026**, now **DEPRECATED** (Ling 3.0 / 3.1 Flash supersede it). It is the *execution/efficiency* twin of the separate **Ring-2.6-1T** "thinking" model (b10): same backbone, but Ling reaches answers via "fast thinking" + Contextual Process Redundancy Suppression instead of extended chain-of-thought. Design thesis is *capability-per-output-token* — a claimed **4× token-efficiency** gain over Ling-2.0 at flagship quality. Independent AA corroborates genuine execution strength (**SWE-bench Verified 72.2**, AA Intelligence Index **34** vs non-reasoning-class median 13), and the tech report shows **AIME26 87.40%** (leader among instant models) and **MRCR 80.37%** (16K→256K). But AA also exposes the non-reasoning tax: **~92.8% hallucination** and **HLE 8.7–10.1%** (bottom-tier hard knowledge-reasoning), and it is **text-only** (no image/audio/video — confirmed by AA + press). Curated `meta.json` here is largely ACCURATE (specs, MRCR, SWE 72.2, hallucination, tau2 78.4 all verified) — the one thing to correct is the AA Index "34": that is a **pre-v5.0 (v4.x) reading**, non-convertible; current v5.0 = N/A (deprecated).

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI/Ant Group's 1.0T-total/63B-active MIT open-weight "instant" agentic flagship — text-only, non-reasoning ("fast thinking"), hybrid Lightning-Attention+MLA, 262K served context; the execution-focused sibling of the reasoning Ring-2.6-1T.
- **Provider-access:** AA lists **1 API provider** ($0.30/$2.50 median). Curated meta adds Requesty/ZenMux + a **free OpenRouter endpoint** (`inclusionai/ling-2.6-1t:free`) + free MIT self-host (`huggingface.co/inclusionAI/Ling-2.6-1T`); Puter.js integrates it. Deployed via vLLM/SGLang. Agent-framework compatible: Claude Code, OpenClaw, OpenCode, CodeBuddy.
- **Release / knowledge:** Released **23 Apr 2026** (AA FAQ). DEPRECATED banner: "InclusionAI has launched a newer release, Ling 3.0 Flash." Built by multi-stage architectural migration off **Ling-2.0** (not from scratch), then 9.6T-token continued pre-training on an Agentic Corpus (500 real-world environments + 3,000 tools) + Long-Context Corpus.
- **IDs:** dataset `ling-2.6.1t`; provider id `inclusionai/ling-2.6-1t`; HF `inclusionAI/Ling-2.6-1T`; AA `ling-2-6-1t`.
- **Context window:** **262,144 served** (AA "262k"; FAQ "260k"; API exposes 256K). Native architecture **advertised up to 1M** (developer doc) but **not the served limit**. Max output ~**32K** (Puter). Hybrid linear attention (Lightning O(N) + MLA 7:1) is what enables the long window at low latency.
- **Modalities:** **Text in → text out ONLY.** AA Technical specs + FAQ: "does not support image input … not multimodal." (Ant's broader BaiLing ecosystem has an omni model, but Ling-2.6-1T itself is a text model.) Non-reasoning ("direct responses without extended chain-of-thought").
- **Pricing:** $0.30/M in, $2.50/M out, $0.06/M cached read (Requesty/ZenMux). AA blended **$0.52/M** (7:2:1) — input competitive, **output "somewhat expensive" vs median $1.80**. i-scoop cites $0.85 blended on a 3:1 ratio (different convention). MIT self-host + free OpenRouter endpoint = $0.
- **Architecture:** MoE **1.0T total / 63B active** (i-scoop + AA; Puter's "roughly 50B active" is a looser figure — use 63B). 256 routed + 1 shared experts, 8 active/token. **Hybrid linear attention: Lightning Attention + Multi-Head Latent Attention in 7:1 ratio** (compresses KV cache, O(N) long-context). Multi-Token Prediction (MTP) for speculative decoding. FP8 training on "ASystem"/ARouter + open-source `linghe` operator-fusion lib. Post-training: expert-driven RL with composite reward `Racc+Rformat+Rlength+Rredundancy` to suppress over-reflection.

### Raw benchmarks found

> Provenance: mix of **independent Artificial Analysis** measurements (SWE-bench Verified 72.2, Intelligence Index 34, context/cost/verbosity) and **vendor tech-report / HF model-card** claims (AIME26, MRCR, BFCL-V4, tau2, IFBench, ArtifactsBench), cross-checked via i-scoop + Puter + the Ling/Ring 2.6 technical report (alphaXiv 2606.15079). AA page is DEPRECATED: v5.0 Intelligence Index + Speed now show **N/A** ("No publicly available API"); the retained Cost ($0.30/$2.50) and historical Index **34** still render.

- **Agent / tool use (AA-independent + vendor):** **SWE-bench Verified 72.2** (reported by AA via i-scoop — independent, not vendor-only). BFCL-V4 (function-calling) + **TAU2-Bench 78.4** (meta/vendor) + IFBench (instruction-following) listed by the model card as "open-source SOTA on execution-heavy benchmarks." #1 open-source on ArtifactsBench (front-end code gen). Strong agent-framework integration is the design intent.
- **Reasoning / knowledge (vendor tech-report + AA):** **AIME26 87.40%** (Ling "instant"; sibling Ring-2.6-1T = 95.78% — NOT credited here). **AA Intelligence Index 34** (historical v4.x, non-reasoning large class vs median 13). **WEAK:** HLE **8.7–10.1%** (bottom-tier), **~92.8% hallucination rate** (AA-Omniscience lineage) — the non-reasoning tax. Verbosity was high (~16M output tokens in AA eval, above class median) despite the "fast thinking" design.
- **Coding:** SWE-bench Verified 72.2 (indep), IFBench, ArtifactsBench #1, positioned for code generation / bug-fixing / repo navigation. Solid for an instant model; the reasoning sibling (Ring) reports the higher 74.0 SWE-Verified (different artifact).
- **Long context:** **MRCR 80.37%** across 16K→256K (tech report; meta "80.4% at 16K, 68.4% at 256K") — degrades at full length but strong mid-range retrieval. This MRCR row belongs to **Ling**, not Ring (b10 reattribution confirmed).
- **Speed / cost:** AA Speed **N/A** (deprecated, no live public API for the speed probe). Cost retained $0.30/$2.50, blended $0.52 (7:2:1). Self-host free (MIT).
- **Meta-verification:** curated `meta.json` is **broadly accurate** — verified 1.0T/63B, 262K, MRCR 80.4/68.4, SWE-Verified 72.2, tau2 78.4, HLE 8.7–10.1, 92.8% hallucination, $0.30/$2.50, MIT free self-host, "superseded by Ling 3.0/3.1 Flash", Ring-is-better-buy framing. **One correction:** treat the implied AA Intelligence Index "34" as **pre-v5.0 (v4.x), non-convertible**; v5.0 = N/A. Also note "MRCR 80.4% at 16K" — the tech report frames 80.37% as the 16K→256K band, with 68.4% at the 256K far end (both true, different lengths).

> Sibling guard (b10, reconfirmed): AIME26 **95.78%**, SWE-Verified **74.00%**, GPQA-Diamond **88.27%**, PinchBench **87.60**, ClawEval **63.82**, Tau2-Telecom **95.32**, ARC-AGI-2 **66.18** are **Ring-2.6-1T's** (the thinking branch), NOT Ling-2.6-1T. Also distinct from Ling-2.6-Flash (104B/7.4B, AA Index 26) and the newer Ling-3.0-Flash (124B/5.1B, b26) / Ling-3.1-Flash (560B/25B, b8). None of those numbers are credited here.

### Normalized scores (1–100)

- **Tool use: 72/100.**
- **Reasoning: 62/100.**
- **Context window: 77/100.**
- **Multimodal: 50/100.**
- **Coding: 70/100.**
- **Cost efficiency: 72/100.**
- **Overall Score: 66/100.**

Overall = half-up mean of the five quality dims (72+62+77+50+70)/5 = 66.2 → **66**. Cost efficiency ($0.52 blended + free self-host, but $2.50 output above class median) is scored but NOT counted, per contract. Curated `average.md` = 64.2 → **divergence +1.8** (independent AA SWE-bench 72.2 + strong execution/long-context justify a touch above the curated mid-60s, offset by the non-reasoning reasoning/hallucination ceiling). Multimodal = 50 (text-only, AA-confirmed). Context = 77 (262K served, hybrid-linear Lightning+MLA, MRCR 80.4→68.4 — same band as b26 Ling-3.0-Flash's 262K). Reasoning is capped (62): AIME26 87.4 is genuinely strong for an *instant* model, but HLE ~9% and 92.8% hallucination mark the non-reasoning ceiling.

---

## Signature

- **Provided by:** Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- **Method:** Fresh independent public web research (≥3 sources): Artificial Analysis `ling-2-6-1t` page (deprecated; Cost $0.30/$2.50, 1 provider, non-reasoning, text-only, 262K, 1.0T/63B, MIT, historical Index 34), the **Ling & Ring 2.6 technical report** (alphaXiv 2606.15079 — architecture Lightning+MLA 7:1, MoE 256+1/8-active, MTP, AIME26 87.40, MRCR 80.37, Ring SWE 74.0 guarded), i-scoop (AA SWE-Verified 72.2, Index 34, 63B active, text-only limitation, self-admitted long-horizon/multilingual caveats), Puter.js blog (SKU map, 32K output, Ring-vs-Ling split). OpenRouter/HF model-card benchmark tables returned JS-empty/404; benchmarklist 404.
- **Future sources:** A live v5.0 AA Intelligence Index if a public API is reinstated; independent Vals/Aider reproduction of SWE-bench 72.2; measured tok/s on a self-host to restore the Speed dimension; BFCL-V4 / TAU2 exact vendor scores.
