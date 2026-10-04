# Qwen 3.5 — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen (`qwen3.5` family — flagship `Qwen3.5-397B-A17B` + medium series)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (open-weight family; flagship 397B-A17B, medium line 27B / 35B-A3B / 122B-A10B, hosted `Qwen3.5-Flash` / `Qwen3.5-Plus`)
- **Short description:** Alibaba's February-2026 flagship family built on a hybrid Gated DeltaNet + Mixture-of-Experts design (3:1 linear-to-full attention), "Towards Native Multimodal Agents." Strongest verified configuration for agents is the 122B-A10B, for coding the dense 27B; the hosted Flash variant carries the 1M context. This is a series entry, not a single endpoint.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope, OpenAI-compatible `qwen3.5-flash` / `qwen3.5-plus`); open weights on Hugging Face / ModelScope / Ollama / GitHub; third-party via OpenRouter (`qwen/qwen3.5-plus-02-15`). Chat Completions API; native function calling.
- **Release / knowledge:** Flagship 2026-02-16; medium series 2026-02-24 (per Digital Applied, 2026-02-25).
- **IDs:** `opencode/qwen-3.5` (curated) · `qwen/qwen3.5-flash` · `qwen/qwen3.5-plus` · HF `Qwen/Qwen3.5-122B-A10B`
- **Context window:** **262K native** on the open-weight MoE/dense models (morphllm + Digital Applied lineup table); **1M** on the hosted Flash/Plus via the hybrid linear-attention design (verified in the release guide's pricing/lineup tables).
- **Modalities:** text + image + document/PDF in (native multimodal, MMMU-Pro visual reasoning, OmniDocBench doc-understanding, ERQA embodied); text out; reasoning; tool calls; JSON mode. (Curated `meta.json` says "Text in/out / 128K" — that is an un-researched scaffold placeholder, superseded by the sources below.)
- **Pricing (as of 2026-02-25):** Flash **$0.10 / $0.40** per 1M in/out; Plus **$1.20**/M input; all open weights **Apache 2.0** (free self-host, no per-token cost). ~13× cheaper than Claude Sonnet 4.6 on agentic tasks.
- **Architecture:** MoE + hybrid Gated DeltaNet attention (35B-A3B→3B active, 122B-A10B→10B active); flagship 397B-A17B; 27B dense; open weights, Apache 2.0.

### Raw benchmarks found

> Numbers are vendor/press release-table figures aggregated by Digital Applied (2026-02-25) and morphllm (2026-07-12). Where the exact folder subject is a *family*, the strongest verified member per category is cited and labelled. The official `qwen.ai` blog page is JS-rendered and returned no scrapeable text; the release table was reconstructed from secondary reporting and is flagged provisional where a metric was not independently posted. HLE, Artificial Analysis Index, and Omniscience were not published for this family.

Agent / tool use:
- BFCL-V4 (Tool Use): **72.2%** (122B-A10B; vs GPT-5 mini 55.5 — leads open-source function-calling)
- BrowseComp (Search): **63.8%** · ERQA (Embodied): **64.7%**
- Terminal-Bench 2: **49.4%** (122B-A10B; 40.5 on 35B-A3B) — mid tier, caps the agent score
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **86.6%** (122B-A10B; 85.5 on 27B) — just under the 90% frontier bar
- MMLU-Pro: **86.7%** · MMMLU: **86.7%** · HMMT Feb 2025: **91.4%**
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **not published**
- Omniscience Accuracy / Hallucination Rate: **not published**

Coding:
- SWE-bench Verified: **72.4%** (27B; ties GPT-5 mini 72.0) · 72.0% (122B-A10B)
- LiveCodeBench v6: **80.7%** (27B) · 78.9% (122B-A10B)
- CodeForces rating: **2100** (122B-A10B) — trails GPT-5 mini 2160 / Claude Sonnet 4.5 2157
- SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:
- Hybrid Gated DeltaNet enables near-linear scaling; "500K-token doc ≈ 3–4× a 50K doc, not 100×" (vendor claim). No MRCR/RULER/GraphWalks retrieval % published — provisional.
- Multimodal/document: OmniDocBench v1.5 **89.8** (doc understanding, leads the set); MMMU-Pro **76.9** (visual reasoning).

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4. For a family entry the strongest verified member anchors each dimension; the flagship 262K native window is the measured context limit (1M credited only to the hosted Flash variant, noted below). Cost is scored independently and excluded from Overall.

- **Tool use: 74/100.** BFCL-V4 72.2 is elite for open-source function-calling and ERQA/BrowseComp are strong, but Terminal-Bench 2 at 49.4 is only mid-tier and there is no Tau3/GDPval evidence — capped below the 80s.
- **Reasoning: 84/100.** GPQA Diamond 86.6, MMLU-Pro 86.7 and HMMT 91.4 sit just under the frontier line; no HLE/AA-Index/Omniscience published, so held provisional rather than pushed to 90s.
- **Context window: 76/100.** Verified native 262K places it mid 200K–500K band (200K anchors 70); efficiency is excellent but no MRCR/RULER retrieval proof, so not upgraded to the 1M tier (which applies only to the hosted Flash).
- **Multimodal: 80/100.** Genuinely image + document/PDF multimodal (MMMU-Pro 76.9, OmniDocBench 89.8, "native multimodal agents"), clearing the +image 60–70 band into the +PDF 75–90 band; audio/video not quantified keeps it at the low end of that range.
- **Coding: 83/100.** SWE-bench Verified 72.4 (ties GPT-5 mini) and LiveCodeBench v6 80.7 are frontier-adjacent; competitive-programming lags (CodeForces 2100 < 2160) and no SciCode/DeepSWE, so it stays just under the frontier.
- **Cost efficiency: 97/100.** Flash $0.10/$0.40 per 1M plus fully free Apache-2.0 self-hosting is exceptional value at ~13× below Claude Sonnet 4.6.
- **Overall Score: 79.4/100.** (74+84+76+80+83)/5 — a frontier-adjacent open-weight agentic family. Best fit: teams wanting near-GPT-5-mini SWE/tool-use quality with full deployment control and a large real multimodal/document surface at a fraction of proprietary cost.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen3.8-flash)** — 2026-10-04
- Method: fresh public web research (release guide + spec aggregator); official `qwen.ai` blog was non-scrapeable, so benchmark-table figures are cited from Digital Applied (2026-02-25) and morphllm (2026-07-12). Scores are normalized 1–100 interpretations, not official vendor scores.
- Revisit trigger: an official Qwen3.5 blog table with HLE / AA-Index / MRCR and an explicit audio/video modality list would raise Reasoning, Context, and Multimodal.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
