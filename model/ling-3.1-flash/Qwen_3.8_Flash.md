# Ling 3.1 Flash — findings by Qwen 3.8 Flash

- Source: InclusionAI / Ant Group (`inclusionai/ling-3.1-flash`)
- Date: 2026-10-04 (UTC) / second pass 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** Ant Group's InclusionAI next-gen **hybrid-reasoning MoE** built for agents — a text-only, tool-calling, free-to-call model (successor to Ling 3.0 Flash; the vision sibling is the separate `ling-3.0-flash-vl`). Launched 2026-10-02 with a broad agentic benchmark suite.
- **Provider / access:** OpenRouter `inclusionai/ling-3.1-flash`; Vercel AI Gateway listing; Ant Ling API. Chat Completions. Function calling, tool choice, structured/JSON outputs, reasoning tokens.
- **Release / knowledge:** 2026-10-02 (launch screenshots 2026-09-30).
- **IDs:** `inclusionai/ling-3.1-flash`
- **Context window:** **262,144** tokens, max output **32,768** (Kilo/OpenRouter, consistent). (Curated `meta.json` "128K" is a scaffold placeholder — corrected.)
- **Modalities:** **text-only input** (Kilo lists Input Modalities = Text; no image/audio/video rows on BenchLM), text out, reasoning mode yes, tool calls yes.
- **Pricing (as of 2026-10-04):** **$0.00 / $0.00** per 1M (free to call in preview).
- **Architecture:** hybrid-reasoning MoE, **560B total / 25B active** parameters; tokenizer "Other"; proprietary/free-API listing.

### Raw benchmarks found

> Vendor launch figures (Ant Ling, 2026-09-30) surfaced via BenchLM (8-of-645 coverage — no public overall score / unranked). The suite is heavily **agentic** by design. Classic static-reasoning gauges (GPQA, HLE, MMLU-Pro, AA-Index) and SWE-bench Verified / LiveCodeBench are **not published** for this ID, so Reasoning/Coding rest on adjacent measured proxies and are marked provisional. Multimodal is scored at the text-only floor because Kilo explicitly lists text input.

Agent / tool use (headline strength):
- CyberGym: **87.9%** · DRACO: **85.5%** — frontier-tier agentic/robustness
- skillsBench: **68.7%** · Finance Agent v2: **57.9%** · AutomationBench: **52.5%**
- Terminal-Bench 4: **40.4%** (agentic terminal)
- τ²-bench / BFCL / GDPval-AA / Toolathon: **no verified public score found** (the above suite stands in)

Reasoning / knowledge:
- HealthBench Professional: **65.3%** (specialized knowledge, best available signal)
- GPQA Diamond / HLE / MMLU-Pro / Artificial Analysis Index / Omniscience: **no verified public score found**

Coding:
- SWE-Atlas Codebase QnA: **55.9%** (codebase question-answering)
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:
- 262K native; no MRCR / RULER / GraphWalks retrieval % published.

Multimodal:
- No image/audio/video benchmark rows exist for this ID; Kilo lists **text-only input** → scored at the text-only floor.

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4. Its designed strength (agents/tools) is well-evidenced and scored high; static reasoning and repo-level coding are thin-but-adjacent and held provisional; and — unlike the VL sibling — this endpoint is text-only, so Multimodal takes the 15 floor. That floor legitimately pulls Overall below the cohort's 64.6. Cost excluded from Overall.

- **Tool use: 80/100.** A deliberately agentic model with a broad, strong battery — CyberGym 87.9, DRACO 85.5, skillsBench 68.7, AutomationBench 52.5, Finance Agent 57.9; Terminal-Bench 4 at 40.4 keeps it from the low 80s+.
- **Reasoning: 60/100.** Hybrid-reasoning with reasoning tokens and HealthBench-Pro 65.3, but no GPQA/HLE/AA-Index published — a competent mid reading carried on the best available proxies, provisional.
- **Context window: 74/100.** Verified 262K sits mid 200K–500K band (200K anchors 70); no retrieval benchmark to justify more.
- **Multimodal: 15/100.** Text-only input confirmed (Kilo), zero multimodal benchmark rows → text-only floor; vision lives in the separate `-vl` sibling, not here.
- **Coding: 56/100.** SWE-Atlas Codebase QnA 55.9 and Terminal-Bench 4 40.4 show codebase/terminal skill, but with no SWE-bench Verified/LiveCodeBench the coding verdict stays provisional.
- **Cost efficiency: 100/100.** Free to call ($0.00 in/out) in preview — at the top of the value scale.
- **Overall Score: 57.0/100.** (80+60+74+15+56)/5 — a free, agent-and-tool-first reasoning MoE whose text-only modality is the binding constraint. Best fit: agentic workflows, finance/automation tool-use, and codebase Q&A on a $0 budget, where vision is handled by a separate model.

## Second-pass update — 2026-11-04 (UTC)

**Trigger check:** "publication of GPQA/HLE and SWE-bench Verified/LiveCodeBench for this ID would firm Reasoning/Coding; confirmed image/video input would lift Multimodal." **PARTIALLY FIRED** — context spec updated, intelligence trigger NOT fired.

- **Context upgraded 262K → 1M (CONFIRMED):** AA `models/ling-3-1-flash` spec table states "Context window: 1M"; the Oct 27 HF drop (`Ling-3.1-flash-1019`) is a context-extended revision (560B/25B same architecture). Pass-1 recorded 262K (the Oct 2 launch figure from Kilo/OpenRouter). Current authoritative serving spec: **1M**. Revised Context band: **74→85** (≥1M tier 95–100 floor, discounted for zero retrieval measurement — no MRCR/RULER/AA-LCR published; comparable to pass-1 scoring logic for solar-pro-4 at 524K/85). Still NOT full 95+ because retrieval is unmeasured.
- **Pricing change:** AA reports **$0.30/$0.90** per 1M (cache 80%). Pass-1 noted "$0.00 free preview" — the preview period ended. Cost band revised 100→90 (genuinely cheap but no longer free). Cost excluded from Overall.
- **AA Intelligence Index N/A:** Listed but NOT measured ("Unknown out of 4 units"). The reasoning trigger (GPQA/HLE/Index) did NOT fire. Reasoning 60 held (provisional).
- **Text-only confirmed:** AA: "supports text input, outputs text." Multimodal 15 held.
- **Speed/latency:** AA measured 184 tok/s, 19.39s TTFT — healthy for a 560B MoE. No band impact (speed not scored in quality dims).
- **Revised Overall:** mean(Tool 80, Reasoning 60, **Context 85**, Multimodal 15, Coding 56) = 296/5 = 59.2 → **59** (up from 57). The +2 delta is driven entirely by the context-window correction.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen3.8-flash)** — 2026-10-04
- Method: fresh public web research (Ant Ling launch benchmark suite via BenchLM 2026-10-02, Kilo/OpenRouter for specs & modality list); scores are normalized 1–100 interpretations, not official vendor scores.
- Revisit trigger: publication of GPQA/HLE and SWE-bench Verified/LiveCodeBench for this ID would firm Reasoning/Coding; any confirmed image/video input would lift Multimodal off the 15 floor.
- Second-pass signature: **Qwen 3.8 Flash** — 2026-11-04. Context upgraded 262K→1M (AA spec, Oct-27 HF drop `Ling-3.1-flash-1019`); Intelligence Index N/A (Reasoning trigger NOT fired); text-only confirmed; free preview ended ($0.30/$0.90). Context band 74→85; Overall 57→59 (+2, context-driven).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
