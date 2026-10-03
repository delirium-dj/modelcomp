# Ling 3.0 Flash Vl — findings by Big Pickle

- Source: InclusionAI / Ant Group (`inclusionai/ling-3.0-flash-vl`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL (Ling-3.0-flash-VL)
- **Short description:** InclusionAI's (Ant Group's) open-weight **native multimodal** build of
  Ling-3.0-flash — the same 124B-total hybrid-reasoning MoE extended with image *and video*
  perception, aimed at visual agent work: reading screenshots and documents, watching video clips,
  and turning what it sees into tool actions. Its pitch is throughput-per-dollar on vision-heavy
  agent pipelines rather than frontier capability. **Flag:** this folder is scaffolded
  (`"scaffolded": true`) and its `opencode/ling-3.0-flash-vl` route does not exist — Zen serves
  `ling-3.0-flash-fin-free` and `ling-3.1-flash-free` instead.
- **Provider / access:** OpenRouter, `inclusionai/ling-3.0-flash-vl`, **Chat Completions API**
  (`POST https://openrouter.ai/api/v1/chat/completions`; `tools`, `tool_choice`, `response_format`,
  `reasoning`, `top_k`, `min_p`, `repetition_penalty` accepted). Weights are public on Hugging Face
  under the **MIT** license (`inclusionAI/Ling-3.0-flash-VL`); self-host via SGLang or vLLM.
  OpenRouter listing created 2026-09-10. The LLMTR card for this ID is marked **Retired**, its
  free window having closed 2026-09-22.
- **Release / knowledge:** released ~**2026-09-10** (OpenRouter listing timestamp; the model card
  ships an `0910` evaluation image). Base Ling-3.0-flash was announced 2026-07-27. Knowledge cutoff
  not published.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (HuggingFace), `inclusionai/ling-3.0-flash-vl`
  (OpenRouter / LLMTR). **No `opencode/ling-3.0-flash-vl` ID exists** on Zen, and no OpenCode Data
  record is published for it (404).
- **Context window:** **262,144 tokens (256K) served; 32,768 max output.** Verified two ways:
  OpenRouter reports `context_length: 262144`, and InclusionAI's own launch recipe serves
  `--context-length 262144` under YaRN (factor 2.0, rope_theta 6,000,000, extending a native
  131,072 window). The base Ling-3.0-flash card additionally claims seamless scaling to 1M.
- **Modalities:** **text, image and video in; text out.** Function/tool calling (works in both
  reasoning states), prompt caching. **No audio input**, and no schema-enforced JSON mode.
  Thinking/reasoning mode is **on by default** (`enable_thinking: false` to disable); recommended
  sampling `temperature=1.0, top_p=0.95, top_k=20`.
- **Pricing (as of 2026-10-03):** **$0.021 / 1M input, $0.0616 / 1M output** (OpenRouter, converted
  from $0.000000021 and $0.0000000616 per token). Earlier free windows have expired (base model
  free on OpenRouter/Vercel through 2026-08-03; LLMTR free ended 2026-09-22).
- **Architecture:** **open weights, MIT license.** 124B total parameters, **5.5B active per token**
  (5.1B in the text-only base). 42-layer hybrid backbone alternating Kimi Delta Attention (KDA) and
  Gated MLA layers at a 5:1 ratio; ViT visual encoder plus a two-layer MLP projector; VideoRoPE
  encoding spatial position *and* temporal order.

### Raw benchmarks found

**Independent measurements (via BenchLM, sourced from Artificial Analysis model benchmarks,
page updated 2026-10-02):**

- BenchLM overall **47.66 / #105 of 783** (11 of 645 benchmarks covered — the score is explicitly
  flagged conservative; Agentic and Coding lanes not yet computed)

Agent / tool use:

- GDPval-AA: **32.5%** (AA)
- Terminal-Bench 2.1: **no verified public value found.** InclusionAI states it *was* run — under
  the AA protocol, Terminus 2 harness, unified 2-hour timeout, preserve-thinking JSON parser,
  3 runs per task (mean) — but the result exists only inside a chart image on the model card.
- Tau3-Banking / MCP-Atlas / SkillsBench: **no verified public value found.** The base
  Ling-3.0-flash card names all three as strengths; the numbers are likewise card images.

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (AA)
- HLE: **22.0%** (AA)
- LCR / MLCR: **78.3%** (AA-LCR)
- CritPt: **2.0%** (AA)
- Artificial Analysis Intelligence Index: **42** on **v4.1.1** per InclusionAI's card (+4 over
  Ling-3.0-flash's 38); BenchLM records **24.6** on its own normalized presentation of the same index
- Omniscience Index / Accuracy / Hallucination Rate: **−4.5 / 14.4% / 22.0%** (AA)

Coding:

- SciCode / AA-SciCode: **44.2%** (AA)
- SWE-bench Pro / SWE-bench Multilingual / LiveCodeBench / Vibe Code Bench: **no verified public
  value found** for the VL variant (the base card names SWE-Bench Pro and SWE-Bench Multilingual as
  strengths; values are chart images).

Long context / multimodal:

- AA-MMMU-Pro: **79.0%**
- **no long-context retrieval measurement reported** — no MRCR, RULER or GraphWalks row exists for
  the VL variant. The 256K window is a documented capacity, not a measured retrieval result.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calling is confirmed functional in both reasoning states and the model
  was purpose-built as an agent execution node (trained across 10,000+ interactive environments, with
  an explicit visual "Act" capability for driving interfaces), which justifies the mid band. What
  caps it: the only extractable agentic number is GDPval-AA **32.5%**, below the 900–1200 Elo mid
  reference, and Terminal-Bench 2.1, Tau3, MCP-Atlas and SkillsBench values exist only as chart
  images I could not read — so no upward move is earned on evidence.
- **Reasoning: 74/100.** Above the mid band on three of four markers: GPQA Diamond **86.2%**
  (mid band is 60–80%), HLE **22.0%** (mid is <10%), LCR **78.3%** (mid is <40%). Capped by
  **CritPt 2.0%** and a weak Omniscience Accuracy of 14.4% — it knows a lot, but says little of what
  it knows under adversarial probing.
- **Context window: 76/100.** 262,144 tokens served lands in the 200K–500K tier (65–84) above the
  200K = 70 anchor, with a documented path to 1M on the base model. Not scored higher because the
  256K figure is a YaRN extension of a 131,072 native window, and there is **no measured long-context
  retrieval** to justify the top of the tier. **Caveat, not a separate score: 32,768 max output.**
- **Multimodal: 80/100.** Image **and video** input (ViT encoder + VideoRoPE for temporal order) with
  text-only output and no audio — the "+video/PDF in = 75–90" tier, landed in its upper half by
  MMMU-Pro **79.0%**. It cannot enter the 90+ tier because it takes no audio input and emits no
  non-text output.
- **Coding: 52/100.** One extractable data point, AA-SciCode **44.2%** — above the <40% mark that
  floors the 65–75 mid band, but far below the 55%+ frontier reference for SciCode. The base model's
  SWE-Bench Pro / Multilingual strengths are unquantified in readable form, so this sits between the
  bottom band and mid rather than in it.
- **Cost efficiency: 99/100.** $0.021 in / $0.0616 out per 1M on OpenRouter is an order of magnitude
  below the ~$0.10/$0.20 ≈97–99 anchor. Not scored 100 — the free windows have closed, and $0 does
  not apply to any currently purchasable route.
- **Overall Score: 67.4/100.** (55 + 74 + 76 + 80 + 52) / 5 = 67.4. Best fit: high-volume visual
  agent pipelines — screenshot/document reading, video-clip understanding, GUI action sequences —
  on a tight budget. Not a frontier reasoning or long-horizon coding model, and its 4.4% active-
  parameter ratio (5.5B of 124B per token) is the reason the quality dims sit where they do.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-03
- Method: public internet research — InclusionAI's Ling-3.0-flash-VL model card and launch recipes
  (SGLang/vLLM), Ant Group's Ling-3.0-Flash BusinessWire release, OpenRouter model registry and
  API docs, BenchLM's model page (AA-sourced values with ranks), LLMTR catalog entry. Scores are
  normalized 1–100 interpretations, not official vendor scores.
- Caveat on the folder: `opencode/ling-3.0-flash-vl` in `meta.json` is a scaffolded stub for a route
  Zen does not serve. The scored subject is the real, MIT-licensed InclusionAI model, priced on
  OpenRouter.
- Gap for a future pass: InclusionAI's Terminal-Bench 2.1, MCP-Atlas, Tau3-banking, SkillsBench,
  SWE-Bench Pro and long-context numbers are published **only as chart images** on the model card.
  Reading those images would materially firm up the Tool and Coding dimensions.
- Future sources: add a new file next to this one, e.g. `Ling_3.1_Flash_VL.md`, using the same headings.