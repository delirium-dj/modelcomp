# MiMo V2.5 Pro — findings by Qwen 3.8 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.5-pro`; official page mimo.xiaomi.com/mimo-v2-5-pro)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship open-weights agentic model — a **1.02T-parameter MoE (42B active), hybrid-attention, MIT-licensed**, built for demanding agent loops and 1,000+ tool-call tasks with 1M-token coherence. Explicitly the **text-only Pro sibling** of the MiMo V2.5 family (the omni heritage lives in other siblings, not this ID). Since superseded by the V2.6 series.
- **Provider / access:** Xiaomi MiMo API (OpenAI-compatible), OpenRouter `xiaomi/mimo-v2.5-pro`, DeepInfra and other hosts; self-hostable (smallest GGUF build ~304 GB). No Zen Free ID.
- **Release / knowledge:** announced 2026-04-27 (official Xiaomi page); HF collection `XiaomiMiMo`; cutoff not verified.
- **IDs:** `xiaomi/mimo-v2.5-pro` (a.k.a. MiMo-V2.5-Pro).
- **Context window:** **1M** (Pro; curated `meta.json` notes the base V2.5 sibling is 256K). OpenRouter lists 1.1M for the family.
- **Modalities:** **Text in / text out** (OpenRouter's advertised capability set is text + tools + reasoning; no image-input surface for this ID). Reasoning yes; tool calls yes; JSON mode yes. The curated `meta.json` agrees ("Text-only (Pro)") — but Kimi K3's sibling report credited "family omni heritage" vision, which does not transfer to this exact ID.
- **Pricing (as of 2026-10-02):** curated ~**$0.44 / $0.87 per 1M** (matches OpenRouter family listing $0.41/$0.83); Xiaomi's own API reportedly ~$1/M input; self-hosting the trillion-param weights costs more than the API for most users. Cost excluded from Overall.
- **Architecture:** 1.02T-param MoE, 42B active, hybrid attention, MIT open weights.

### Raw benchmarks found

> Verified via the official Xiaomi model page (SWE-bench Pro 57.2 row, fetched via search 2026-10-02), OpenRouter capability/pricing confirmation, and the qualifying `Kimi_K3.md` BenchLM scorecard (τ² 94.2, τ³ 72.9, GPQA 86.6 AA / 82.6 Vals, HLE 48 w/tools, SWE-V 74, LCB 81.4, BenchLM 52.03/#68). Lane caveat: Artificial Analysis intelligence index is reported as **26.0** (BenchLM) but **53.8** (OminiGate) — a 2× disagreement I could not resolve and did not average blindly.

Agent / tool use:

- τ²-bench: **94.2%**; τ³-bench: **72.9%** (BenchLM) — elite telecom/banking tool-call performance
- Terminal-Bench 2.0: **68.4%**; TB 2.1 (Vals): **57.3%**; Claw-Eval: **63.8%**; Gert Labs: **62.7%**
- GDPval-AA: **1265 Elo** (30.4% normalized); **APEX-Agents-AA: 2.4%** (collapse); AA Agentic Index: **22.7%**

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (AA) / **82.6%** (Vals); MMLU-Pro (Vals): **84.6%**
- HLE: **48.0%** w/ tools (34.0% no tools; AA-HLE 35.7%) — passes the 40% frontier bar only with tool assistance
- AA-LCR: **79.7%**; CritPt: **4.0%** (near-floor); AA-IFBench: **79.9%**
- AA Intelligence Index: **26.0 (BenchLM) vs 53.8 (OminiGate)** — unresolved lane war; BenchLM overall **52.03 / #68 of 507**
- AA-Omniscience: accuracy **22.4%** / hallucination **24.7%** — honest-but-underinformed, not a fabricator

Coding:

- SWE-bench Verified (Vals): **74.0%**; SWE-bench Pro: **57.2%** (matches the official Xiaomi table)
- LiveCodeBench (Vals): **81.4%**; AA-SciCode: **50.6%**; AA Coding Index: **60.2**

Long context:

- AA-LCR **79.7%** at the 1M window; no MRCR/RULER probes found; designed for 1,000+ tool-call long-horizon sessions.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Vals/BenchLM lanes are mixed but internally consistent; the two genuinely contested numbers (AA index 26↔53.8; vision credit) are handled conservatively rather than averaged.

- **Tool use: 75/100.** τ² 94.2 / τ³ 72.9 / TB2.0 68.4 / Claw 63.8 is a genuinely strong execution stack — exactly what the model was built for. Pulled back from the high 70s by the APEX-Agents 2.4% collapse and a mediocre GDPval-AA 1265, evidence its long-horizon generalist-agent transfer is uneven.
- **Reasoning: 72/100.** GPQA 82.6–86.6 and HLE 48-with-tools are solid upper-middle; but HLE drops to 34 unfurnished, CritPt 4.0 is near-floor, Omniscience accuracy 22.4 shows a knowledge ceiling, and the AA index itself is disputed (26 vs 53.8). Scored mid-70s, not the cohort's 77.4-by-inheritance.
- **Context window: 92/100.** 1M verified with AA-LCR 79.7% coherence inside it — top band, slightly below the 95 floor because retrieval probes beyond LCR are absent. The curated 1M claim is honest here, unlike many folders.
- **Multimodal: 18/100.** This exact ID is **text in / text out** (OpenRouter capability set + curated meta agree); the sibling report's Design Arena 1281 belongs to a vision-capable family member, and cross-variant borrowing is disallowed. Text-only band 10–20, at its ceiling given first-class tool/JSON output. This is the single biggest driver of divergence from the cohort's 36.1 (whose raters partially credited family heritage).
- **Coding: 74/100.** SWE-V 74 / LCB 81.4 strong; SWE-Pro 57.2 (vendor-confirmed) and Coding Index 60.2 show the Vals lane flatters it; SciCode 50.6 mid. Solid agentic-coder, not a frontier one.
- **Cost efficiency: 93/100.** ~$0.44/$0.87 per 1M for a trillion-param flagship is among the cheapest strong-agentic calls anywhere (methodology anchors ~$1.25/$4.25 at 88); no free tier; self-hosting impractical for most. Cost excluded from Overall.
- **Overall Score: 66/100.** Mean of Tool 75, Reasoning 72, Context 92, Multimodal 18, Coding 74 = 331/5 = 66.2 → **66**. Best fit: **high-volume tool-calling agent pipelines and long-context text coding** where τ-class reliability, 1M coherence and open MIT weights matter more than vision — a genuinely excellent budget agentic engine whose Overall is dragged ~9 points below the cohort's 72.7 almost entirely by scoring this exact ID as the text-only model it is. Superseded by MiMo V2.6; revisit only for historical comparison.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (official Xiaomi model page 2026-04-27 for 1.02T/42B MoE, hybrid attention, 1M, MIT, SWE-bench Pro 57.2; OpenRouter for text-only capability set and ~$0.41/$0.83 pricing; OminiGate for the conflicting AA index 53.8; spheron/atomic.chat for self-host cost context) cross-checked against the qualifying `Kimi_K3.md` BenchLM scorecard and curated `meta.json`. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) the AA Intelligence Index 26↔53.8 lane war, (b) the cohort's multimodal inflation via family-heritage borrowing, (c) CritPt 4.0 and APEX 2.4 as honest floors.
- Revisit trigger: if Xiaomi or Artificial Analysis settle the AA Intelligence Index for `mimo-v2.5-pro`, or BenchLM publishes MRCR/vision rows under this exact ID, re-score Reasoning/Multimodal. Otherwise the V2.6 series is the forward-looking target.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
