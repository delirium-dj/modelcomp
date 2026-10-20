# Qwen3.8 27B — findings by MiniMax M3.1 Flash

- Source: Alibaba (`qwen3.8-27b` — open weights `Qwen/Qwen3.8-27B`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 27B
- **Short description:** Alibaba's **dense** 27B entry in the Qwen3.8 family — a *causal language model with a vision encoder*, not a MoE — built on a hybrid **Gated DeltaNet + Gated Attention** stack (64 layers) and released under **Apache 2.0**. It is the **#1 model in Artificial Analysis's "Small (4B–40B) open-weights" class** (index 34) — i.e. the strongest small open-weight model measured — and, per Simon Willison, the cheapest model in his AA-index cost table ($1,336 for a full index run).
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B` (Apache 2.0, BF16; 7,458,401 downloads last month) and ModelScope; hosted on **Qwen Cloud** as `qwen3.8-27b` (`https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1`); OpenRouter `qwen/qwen3.8-27b` (canonical `…-20260814`); GitHub `QwenLM/Qwen3.8`. **Not listed on OpenCode Zen** and not in Alibaba Cloud Model Studio's recommended text-model table.
- **Release / knowledge:** released **2026-08-14** (GitHub News: "Qwen3.8-27B is now available on Hugging Face Hub and ModelScope"; AA "was released on August 14, 2026"). Knowledge cutoff: **not disclosed** (OpenRouter `knowledge_cutoff: null`).
- **IDs:** `qwen3.8-27b` (Qwen Cloud), `qwen/qwen3.8-27b` (OpenRouter), `Qwen/Qwen3.8-27B` (HF).
- **Context window:** **262,144 natively, extensible to 1,000,000** via YaRN `factor 4.0`; the hosted route serves 1M (max input 991K, max output 131K, max reasoning 262K, TPM 5M, RPM 5K).
- **Modalities:** text + image + video in, text out.
- **Reasoning controls:** thinking on by default; `reasoning_effort` **xhigh (default)** / medium / low, plus `enable_thinking` and `preserve_thinking` (default on); recommended caps 262,144 reasoning / 131,072 final; sampling temperature 1.0, top_p 0.95, top_k 20 (reasoning) or 0.7 / 0.80 / 20 with presence_penalty 1.5 (instruct).
- **Pricing (as of 2026-10-19, per 1M tokens):** Qwen Cloud **$0.50 in / $3.00 out**, implicit cache $0.10, explicit cache create $0.625, explicit cache read $0.05. **OpenRouter lists $0.04 in / $1.35 out / $0.018 cache read** — roughly 12×/2× cheaper than the vendor list. AA blended rate $0.47/1M; cost per index task $1.01 (#21 of 24).
- **Architecture:** **dense 27B** (HF "Model size 28B params"), 64 layers, hidden 5120, hybrid layout "16 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN))" — 48 linear-attention heads (V) / 16 (QK) at head dim 128, 24 attention heads (Q) / 4 (KV) at dim 256 with RoPE dim 64, FFN 17,408, vocab 248,320, MTP trained with multiple steps. **Unlike the rest of the Qwen3.8 family it is not MoE** — the 27B slot is the dense model.

### Raw benchmarks found

> The HF model card's table is marked "vendor" (Claude Code harness, temp 1.0, top_p 0.95, 256K context); Artificial Analysis, Vals AI and the BenchLM ledger are independent.

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (vendor, Terminus) / **79.78%** (AA) / **58.43%** (Vals AI, #42/75)
- Terminal-Bench 4.0: **5.56%** (AA) — near-zero on the current agentic-terminal benchmark
- Agents' Last Exam: Pass@1 **20.4%** / score **42.9%** (vendor); CoWorkBench **70.7%**; JobBench **33.4%**; QwenSWEBench 79.0% (avg@3)
- IFBench **79.5%** (vendor) / 82.2% (for Inkling-Small; for this model AA's IFBench is null); Mcp Atlas: not published; Toolathlon: not published; τ³-Banking **48.04%** (AA); AutomationBench **48.24%** (AA); GDPval-AA **1416.92** (AA)
- ClawEval-MM 57.4% pass@3 (vendor); Vision2Web 62.9%; OSWorld-Verified 84.3%; AndroidWorld 81.9%; WebArena-Verified 64.8%
- IPI / CWE-bench / Hermes: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.51%** (AA) / 89.2% (vendor) / 88.89% (Vals AI)
- HLE: **33.92%** (AA) / 30.8% (vendor); LCR **82.0%** (AA); CritPt **5.43%** (AA); MLCR-AA 21.67% (AA)
- Artificial Analysis Intelligence Index: **34**, **#1 of 141** in the open-weight **Small (4B–40B)** class — "Qwen3.8 27B (xhigh) and Qwen3.8 27B (medium) are the highest intelligence Small open source models"; 45.2 t/s (#48/64), TTFT 3.92s, $1.01/task, 200M output tokens (#25/27), 12 providers, Apache 2.0. Effort variants: **Medium 28** (50 t/s), **Low 26** (43 t/s), **Non-reasoning 20** (48 t/s)
- FrontierMath: **no verified public score found** for this model; ARC-AGI: no independent row; Omniscience index **-9.98** (accuracy 15.58%, hallucination 30.29%)
- MMLU-Pro 84.34% (Vals); MMMU-Pro 83.93% (Vals) / 76.30% (AA); MathVision 90.0 / 94.6 with CI (vendor); ERQA 65.5%; CharXiv 83.7 / 90.2; RealWorldQA 85.9%; OmniDocBench 1.5 91.1%

Coding:

- SWE-bench Pro **61.7%** (vendor) / SWE-bench Verified **86.00%** (Vals AI, #15/88) / SWE-bench Pro independent: **no verified public score found**
- DeepSWE v1.1: **42.2%** (vendor) — and **no row for this model on the public DeepSWE leaderboard** (28 models as of 2026-09-01), nor on Vals
- LiveCodeBench v6 **90.3%** (vendor) / 84.00% (Vals); Terminal-Bench 2.1 73.0–79.78%; SciCode **46.64%** (AA); FrontierCode 1.1 **34.23%** (AA); NL2Repo-Bench 42.3%
- ProgramBench **0.00%** (Vals); Terminal-Bench-Science 0.1 **0.00%** (Vals)

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for this model. 262,144 native (1M with YaRN).

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** Terminal-Bench 2.1 79.78% (AA) / 73.0% (vendor) / 58.43% (Vals), CoWorkBench 70.7%, OSWorld-Verified 84.3%, AndroidWorld 81.9%, WebArena-Verified 64.8%, τ³-Banking 48.04%, AutomationBench 48.24%, Agents' Last Exam 20.4% pass@1, GDPval-AA 1416.92. Capped by the rubric's anchors (TB2.1 ~88%+ → 79.78% at best; τ3 ~50%+ → 48.04%; GDPval ~1750+ → 1416.92), by **Terminal-Bench 4.0 at 5.56%**, by JobBench 33.4% and Agents' Last Exam 20.4%, and by the absence of any Toolathlon, MCP-Atlas or CWE-bench row.
- **Reasoning: 73/100.** GPQA Diamond 88.89–90.51%, LCR 82.0%, MMLU-Pro 84.34%, MathVision 90.0–94.6%, and the **#1 position in AA's small-open-weight class** (index 34). Capped by HLE 30.8–33.92%, CritPt **5.43%**, the **negative Omniscience index (-9.98, accuracy 15.58%)**, the absence of any FrontierMath or ARC-AGI measurement, and the AA index itself (34) sitting below the rubric's 60+ frontier anchor.
- **Context window: 93/100.** 262,144 native, extensible to 1,000,000 via YaRN `factor 4.0`, and served at 1M by Qwen Cloud (max input 991K, max output 131K) — the rubric's top tier on the hosted route, the 200K–500K band on the open weights. **No long-context retrieval measurement exists** for this model, and Static YaRN extension is not the same as native 1M behaviour, so the score sits just under the top band.
- **Multimodal: 90/100.** Text, image and video in with text out — the rubric's "+video/PDF = 75–90" band, lifted by measured numbers: MMMU-Pro 76.30% (AA) / 83.93% (Vals), CharXiv 83.7% / 90.2% with CI, MathVision 90.0 / 94.6, OmniDocBench 1.5 91.1%, RealWorldQA 85.9%, ERQA 65.5%, OSWorld-Verified 84.3%, AndroidWorld 81.9%, Vision2Web 62.9%. No audio support, which is what keeps it at the top of the 75–90 band rather than in the 90–100 one.
- **Coding: 76/100.** SWE-bench Verified 86.00% (Vals, #15/88) and SWE-bench Pro 61.7% (vendor), LiveCodeBench v6 90.3% (vendor) / 84.00% (Vals), Terminal-Bench 2.1 79.78%, NL2Repo 42.3%. Capped by **DeepSWE at 42.2%** — a third of the field's best — by ProgramBench 0.00% and Terminal-Bench-Science 0.00%, by Terminal-Bench 4.0 at 5.56%, by SciCode 46.64% and FrontierCode 34.23%, and by the absence of any DeepSWE leaderboard row.
- **Cost efficiency: 82/100.** The evaluated route is Qwen Cloud at **$0.50 in / $3.00 out** per 1M with a $0.10 implicit cache, which the rubric places at roughly 82. OpenRouter's $0.04/$1.35 would be far cheaper, and the **Apache 2.0 weights are free to self-host** — but there is **no OpenCode Zen route**, so the model's cheapness is not reachable through this dataset's usual gateway, and the model is the most verbose in its AA class (200M output tokens, #25/27).
- **Overall Score: 80.8/100.** (72 + 73 + 93 + 90 + 76) / 5 = 80.8 — best-fit: **the strongest small open-weight model available** (AA class #1, Apache 2.0, 262K→1M, text+image+video, $0.50/$3.00 or $0.04/$1.35 on OpenRouter) with excellent vision — and a clear ceiling: DeepSWE 42.2%, Terminal-Bench 4.0 5.6% and a negative Omniscience index mean it is a strong perception-and-reasoning model for its size, not an agentic-coding one.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA index — 34 (site) / 33.7 (OpenRouter and BenchLM) vs a Hacker News headline "Qwen3.8 27B scores 52 on Artificial Analysis" (2026-08-17).** Index-version change; the current 34 is scored.
2. **"#1 of its class" is not "#1 of Qwen3.8".** The 27B tops AA's *Small 4B–40B* class, but the Flash-Next sibling scores **40** (#9/121 overall) at **$0.15/$0.47** with 55.2 t/s and $0.37 per task, versus the 27B's $0.50/$3.00, 45.2 t/s and $1.01 per task. The 27B is the class leader, not the family leader, and not the value leader.
3. **Terminal-Bench 2.1 — 73.0% (vendor) vs 79.78% (AA) vs 58.43% (Vals)** — a 21-point spread; AA is the anchor.
4. **DeepSWE 42.2%** appears only on the vendor's card: the public DeepSWE leaderboard (28 models, 2026-09-01) has **no Qwen3.8 27B row**, and neither does Vals — an unverified claim.
5. **Pricing — $0.50/$3.00 (Qwen Cloud, AA) vs $0.04/$1.35 (OpenRouter)**: roughly 12× on input and 2.2× on output between two hosts serving the same weights.
6. **Context — 262,144 native (HF, OpenRouter provider, AA 256k) vs 1M (Qwen Cloud).** Native vs served.
7. **SWE-bench — 61.7% is SWE-bench *Pro* (vendor); 86.00% is SWE-bench *Verified* (Vals).** Not comparable; both are labelled.
8. **Omniscience index -10.0 with 15.6% accuracy** — a negative score, i.e. more wrong than right on the knowledge probe.
9. **Speed — 45.2 t/s via the Alibaba API vs 15–30 t/s measured locally** by Simon Willison, who also notes the model "defaults to wildly overthinking things" and that a local MTP draft was "~72%" faster than LM Studio's default.
10. **No independent vision or long-context harness has run this model** — the multimodal and context rows rest on the vendor card plus AA's mirror.

### Notes on identity

- `qwen3.8-27b` is the **dense** member of the Qwen3.8 family — the HF card types it as "Causal Language Model with Vision Encoder", 27B parameters, 64 layers, no MoE — while `qwen3.8-2.4t-a95b` (the flagship, scored in `model/qwen-3.8/`) is a 2.4T/95B MoE and `Qwen3.8-Flash-Next` is a 125B/51B-ngram/6B-active MoE. The three share the GDN + gated-attention family design but are different models.
- It is **not** a tier of the Max line: no price or id implies that, and AA treats it as a separate class leader.
- The hosted route uses a **regional Qwen Cloud endpoint** (`ap-southeast-1`) with 5M TPM / 5K RPM; OpenRouter's $0.04/$1.35 is a separate host arrangement.
- **Not on OpenCode Zen**, and not in Alibaba Cloud Model Studio's recommended text-model list — it is reachable through Qwen Cloud and OpenRouter only.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the `Qwen/Qwen3.8-27B` Hugging Face model card (architecture, licence, context, vendor benchmark table), the GitHub `QwenLM/Qwen3.8` repo, QwenCloud and Alibaba Cloud Model Studio model pages (ids, pricing, limits), Artificial Analysis (model page with its per-evaluation payload and class ranking), the BenchLM evidence ledger, Vals AI, OpenRouter's API and model page, Simon Willison's local benchmarks, and negative verification at OpenCode Zen, ARC Prize, Epoch AI, swebench.com, the official LiveCodeBench board and LMArena. Vendor-vs-independent conflicts — the index re-baselining, the 21-point Terminal-Bench spread, the unverified DeepSWE claim and the two-host price gap — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B.md`, using the same headings.
