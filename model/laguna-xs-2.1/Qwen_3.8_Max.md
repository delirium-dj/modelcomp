# Laguna XS 2.1 — findings by Qwen 3.8 Max

- Source: Poolside (`poolside/laguna-xs-2.1`; id `poolside/laguna-xs-2.1`; **no AA page** — `artificialanalysis.ai/models/laguna-xs-2.1` 404)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Poolside's **small "local-agent" tier of its open-weight Laguna coding line** — a **33B-total / 3B-active sparse-MoE** agentic-coding model, released **early July 2026**, under the **OpenMDW-1.1 license** (not Apache — that's the older M.1), explicitly sized to **run on a 36 GB Mac** and reachable through a **free OpenRouter route**. It is a **pure coding/terminal agent, text-only**: its headline is **SWE-bench Verified 70.9% / SWE-bench Multilingual 63.1% / SWE-bench Pro 47.6% / Terminal-Bench 2.0 37.5% (vendor)**, remarkable *per active parameter*, but **independent Terminal-Bench is harsher (Kilo eval 26.7%)** and **no general-intelligence benchmark (GPQA / HLE / LiveCodeBench / AIME) was ever published** — it is a specialist, not a reasoner. There is **no Artificial Analysis page** (Intelligence Index / Speed / Cost all unavailable), so no neutral composite exists; quality figures are **Poolside-official (vendor)** with Kilo + Enkrypt as partial independent checks. **Guards:** distinct from the flagship **Laguna S 2.1 (118B/8B, 1M ctx)**, the older **Laguna M.1 (225B/23B, Apache)** and **Laguna XS.2** — none of their numbers are credited here; and the **37.5% vendor Terminal-Bench** ≠ Kilo's independent **26.7%** (different harness).

## Model card

- **Name:** Laguna XS 2.1 (`poolside/laguna-xs-2.1`; AA has no page)
- **Short description:** The **XS (extra-small) tier** of Poolside's Laguna family — a coding-agent model in the **33B-A3B** class, "a step forward from Laguna XS.2 (Apr 2026)." Trained with RL inside Poolside's own agent harness; supports **native tool calling with reasoning preserved across tool calls** and **toggleable interleaved thinking** (pay for reasoning only when a task needs it). "Built for long-horizon software tasks; not drop-in autocomplete."
- **Provider / access:** **OpenMDW-1.1 open weights** (Hugging Face `poolside/Laguna-XS-2.1`) — self-host $0, runs on a **36 GB Mac** / single workstation GPU. Hosted via **Poolside API (OpenAI-compatible)**, **OpenRouter** (incl. a **`laguna-xs-2.1:free` route**), and the **Vercel AI Gateway**. Serving stacks: vLLM, SGLang, Transformers, TensorRT-LLM, llama.cpp, Ollama.
- **Release / knowledge:** Created/listed **2 July 2026** (Kilo); weights on HF alongside S 2.1 (21 Jul 2026). No published knowledge-cutoff. ⚠️ Kilo/OpenRouter tag the route **"(retires Oct 31)"** — a *gateway-route* retirement label, not a weight withdrawal (open weights remain downloadable).
- **IDs:** `poolside/laguna-xs-2.1` (HF / OpenRouter).
- **Context window:** **262,144 total**, **32,768 max output** (Kilo + OpenRouter spec). Matches meta.
- **Modalities:** **Text in → text out only** (Kilo "Input Modalities: Text"; OpenRouter text-only). **NOT multimodal.**
- **Pricing:** **$0.06 / $0.12 per 1M in/out (OpenRouter snapshot, Aug 2 2026)**; Kilo currently lists **$0.10 / $0.20, cache-read $0.05**. **Free route** for evaluation; **$0 OpenMDW self-host**.
- **Architecture:** **Sparse MoE, 33B total / 3B active per token**; reasoning-capable (interleaved thinking on/off); native function calling. **License OpenMDW-1.1** (attribution-style, permissive but **distinct from Apache 2.0**).

### Raw benchmarks found

> **Provenance: Poolside / NVIDIA model card + OpenRouter (vendor)** for the coding benchmark set; **Kilo Code independent Terminal-Bench 2.0 eval** and **Enkrypt AI safety red-team** as partial independent checks. **No Artificial Analysis page exists** → **no independent Intelligence Index / Speed / Cost** at all. No GPQA / HLE / LiveCodeBench / AIME / MMLU figure is published anywhere — general reasoning is essentially unbenchmarked.

**Coding (vendor — the model's whole reason to exist; strong per active parameter):**
- **SWE-bench Verified: 70.9%** · **SWE-bench Multilingual: 63.1%** · **SWE-bench Pro: 47.6%** (Poolside model card).
- **Terminal-Bench 2.0: 37.5%** (vendor) vs **Kilo independent 26.7%** (⚠️ different, harder harness; **$12.03 per complete attempt** — real agentic terminal work is more expensive/less reliable than the vendor number implies).

**Agent / tool use (native but only coding-proximate evidence):**
- **Native function calling + tool-choice + structured outputs + reasoning-across-tool-calls** (feature-level, from Kilo/OpenRouter). No τ²-bench / BFCL / MCP score published; the only agentic *outcome* evidence is the SWE/Terminal-Bench set above.

**Reasoning / knowledge (⚠️ effectively unbenchmarked):**
- **No GPQA, HLE, LiveCodeBench, AIME, or MMLU reported by vendor or any independent source** — consistent with the meta tradeoff note. Reasoning is scoped to code/terminal planning (interleaved thinking), not general QA. Treat general reasoning as **low-confidence**.

**Long context:**
- **262K window**, but **no MRCR / long-retrieval benchmark published**. Serviceable for repo-scale context; recall over long spans unmeasured.

**Safety (Enkrypt AI red-team, independent, last-checked 1 Nov 2026 — lower is safer):**
- **Overall risk 46.0/100**; **Bias 87.3** (high), **CBRN 52.2**, **Insecure-code 41.3**, **Jailbreak 38.7**, **Toxicity 3.6** (low). Notable bias/insecure-code exposure for a code-generating agent.

> **Self-reported vs independent:** the SWE-bench/Terminal-Bench headline set is **Poolside-vendor**; the **only genuinely independent** datapoints are **Kilo's harsher Terminal-Bench 26.7%** and **Enkrypt's safety scores**. There is **no AA composite** (page absent), so the coding strength is credited as vendor per the `pixel_canary` / `xing_4.0_29b_a4b` precedent, tempered by Kilo's real-world gap.

### Normalized scores (1–100)

- **Tool use: 62/100.** Genuinely built for agentic tool use — native function calling with reasoning preserved across calls + toggleable thinking — and it *performs* on SWE/Terminal tasks, but the only outcome evidence is coding-proximate and **independent Terminal-Bench (26.7%) is well below the vendor 37.5%**; no τ²/BFCL breadth.
- **Reasoning: 58/100.** Real code/terminal planning, but **no general-intelligence benchmark was ever published** (no GPQA/HLE/LCB/AIME) → scored **low-confidence**; this is a specialist, not a general reasoner.
- **Context window: 66/100.** **262K** is a solid, generous window for repo-scale agentic work — but **no MRCR/long-retrieval evidence**, so credit the size, not proven recall.
- **Multimodal: 50/100.** **Strictly text-only** (Kilo + OpenRouter confirm text I/O only).
- **Coding: 70/100.** The clear strength: **SWE-bench Verified 70.9 / Multilingual 63.1 / Pro 47.6** from just **3B active params** is excellent efficiency, tempered by the harder **Terminal-Bench 26.7 (Kilo)** — strong for its size, not frontier-class on the toughest long-horizon work.
- **Cost efficiency: 88/100.** **$0.06–0.10 / $0.12–0.20 hosted + a free OpenRouter route + $0 OpenMDW self-host on a 36 GB Mac** — outstanding economics for an agentic coder. *(Scored; not counted in Overall.)*
- **Overall Score: 61/100.** Half-up mean of the five quality dims (62 + 58 + 66 + 50 + 70)/5 = **306/5 = 61.2 → 61**. **Curated `average.md` = 59.9 → div +1.1** (a mild upward divergence: the report credits the genuinely strong **vendor SWE-bench trio** and the **generous 262K window + native agent tooling**, accepting the specialist's thin general-reasoning evidence and text-only modality as the ceiling).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**NVIDIA/Poolside model card** — **SWE-bench Verified 70.9%**, **SWE-bench Multilingual 63.1%**, **SWE-bench Pro 47.6%**, **Terminal-Bench 2.0 37.5%**; **Kilo Code `poolside-laguna-xs-2-1`** — **262,144 ctx / 32,768 max-out**, text-only, created **2 Jul 2026**, function calling + reasoning tokens, **$0.10/$0.20 (cache $0.05)**, independent **Terminal-Bench 2.0 26.7% @ $12.03/attempt**, **Enkrypt safety 46/100 (Bias 87.3 / CBRN 52.2 / Insecure-code 41.3 / Jailbreak 38.7 / Toxicity 3.6)**, route **"(retires Oct 31)"**; **Layer3 Labs Poolside explainer** — **33B total / 3B active sparse MoE**, **262,144 ctx**, **OpenMDW-1.1 license** (S 2.1 also OpenMDW; older M.1 is Apache), RL-in-harness + toggleable interleaved thinking, runs on a **36 GB Mac**, OpenRouter **$0.06/$0.12 (Aug 2 2026)** + free route, family = **S 2.1 (118B/8B/1M), XS 2.1, M.1 (225B/23B), XS.2**; **AA `laguna-xs-2.1` = 404 (no page — no Intelligence/Speed/Cost)**. Curated meta verified — 33B/3B/262K/text-only/OpenMDW-1.1/$0.06-$0.12+free/SWE-Verified 70.9/SWE-Pro 47.6/TB ~37.5/no GPQA-HLE-LCB **all confirmed**.)
- Future sources: if Artificial Analysis adds a page for `laguna-xs-2.1` (Intelligence Index / Speed / Cost), or a neutral harness (Vals / swebench.com / tbench.ai) reproduces its SWE-bench-Verified 70.9% (vendor) and closes the **37.5% vs 26.7% Terminal-Bench gap**, replace the vendor picture. **Guard against** (a) crediting **Laguna S 2.1 (118B/8B/1M, TB 2.1 70.2 / SWE-Multilingual 78.5 / SWE-Pro 59.4)**, **Laguna M.1**, or **Laguna XS.2** numbers to XS 2.1, (b) treating the Kilo gateway **"(retires Oct 31)"** route label as a weight withdrawal, (c) reading the vendor **Terminal-Bench 37.5%** as independent (Kilo measured **26.7%**), and (d) inferring general reasoning ability — **no GPQA/HLE/LCB/AIME was ever published** for this coding specialist.
