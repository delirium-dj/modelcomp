# Claude Opus 4.6 — findings by Pixel Canary

- Source: Anthropic / Claude Opus 4.6 (`anthropic/claude-opus-4-6`, also `claude-opus-4-6`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 — Anthropic's February 2026 flagship: adaptive thinking with configurable low/medium/high/max effort controls and **context compaction** for long-running tasks.
- **Short description:** The writing-and-reliability Opus: it places 2nd out of **218 models** on LM Arena Text Style Control and 2nd of 128 on Text Factuality, and wins Tau2 Telecom (99.30%, #1/36) and Tau2 Retail (91.90%, #1/27) — but on hard coding it sits a clear tier below Opus 4.8, which is why its composite (77.7) trails its successor by 6 points.
- **Provider / access:** Anthropic API; **39 tracked offerings** at $5 / $25 (incl. Eden AI, Kilo Gateway, DevPass); cheapest route **$4.30 / $21 (Poe)**.
- **Release / knowledge:** released **2026-02-05**; knowledge cutoff **not published** (LLMBoard: Unknown) — no verified public figure.
- **IDs:** `anthropic/claude-opus-4-6`, `claude-opus-4-6`. No Free ID (`noFreeId: true`) — paid only.
- **Context window:** **1M in beta** / 128K max output. The local `meta.json` still says "200K", which understates the current published window.
- **Modalities:** image + text in; text out. Tool use, computer use, configurable thinking effort and context compaction yes; no audio/video input, no generation.
- **Pricing (as of 2026-09-27):** official Anthropic **$5 / 1M input, $25 / 1M output** — identical list price to Opus 4.8; floor $4.30 / $21 (Poe). Cache-read and batch rates not tracked (no verified public figure).
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-27): 30 of 44 rows published, coverage **80% / 26 benchmark families**; "#x/y" = rank among models with a published score. Evidence grades: **A** = arena/preference based, **C** = benchmark run. Composite: LLMBoard **77.7**.

Agent / tool use — the standout, with two large-field wins:

- Tau2 Telecom: **99.30%** (#1/36) and Tau2 Retail: **91.90%** (#1/27) — first place in both agentic tool-use suites, the strongest tau-family evidence in this dataset
- OSWorld (computer use): **72.70%** (#3/21); Vending-Bench 2: **8,017.59 USD** (#1/4)
- Finance Agent: **60.70%** (#3/8); DeepSearchQA: **91.30%** (#4/11); OpenRCA **34.90%** ⚠(#1/1)
- GDPval-AA, Terminal-Bench, MCP Atlas, Toolathlon, SWE-Lancer: no verified public score found

Reasoning / knowledge / writing (its strongest evidence class, graded A):

- LM Arena Text Style Control: **1,495 → 1,505.36 rating** (#2/218) — 2nd of 218 models
- LM Arena Text Factuality: **1,493.86 rating** (#2/128); LM Arena Document: **1,507.32** (#3/38); LM Arena Document Style Control **1,495.26** (#2/38)
- LM Arena Search: **1,253.42** (#2/28); Search Factuality **1,227.85** (#3/28); Search Style Control **1,223.31** (#4/28)
- FigQA: **78.30%** (#2/3)
- GPQA / HLE / Omniscience / SimpleQA rows for this ID: not present in the extracted rows — no verified public score found

Coding:

- No SWE-bench Verified, SWE-Bench Pro, LiveCodeBench or FrontierSWE row appears among the extracted rows — **no verified public coding score found**, which is the single biggest gap versus Opus 4.8 (Verified 88.60%, Pro 69.20%).

Long context:

- GraphWalks parents >128K: **95.40%** (#1/7) — best measured long-range graph navigation in the whole dataset; no MRCR / RULER row.

Runtime: **42.00 tok/s** with **0.50 s** catalog latency on Anthropic (1M in / 128K out) — half the throughput of Opus 4.8's 142.11 tok/s at the same price.

### Normalized scores (1-100)

- **Tool use: 90/100.** Tau2 Telecom 99.30% (#1/36) and Tau2 Retail 91.90% (#1/27) are first-place results in the two largest agentic tool fields available, backed by OSWorld 72.70% (#3/21), DeepSearchQA 91.30% (#4/11) and Finance Agent 60.70% (#3/8) - the best-rounded agent profile in this comparison after Qwen3.8 Max.
- **Reasoning: 84/100.** Four Evidence-A arena rows in 38–218-model fields (Text Style Control #2/218, Text Factuality #2/128, Document #3/38, Search #2/28) is unusually reliable evidence, but every row is preference-based and no GPQA/HLE/Omniscience accuracy row exists.
- **Context window: 88/100.** 1M in beta with 128K output and a dominant GraphWalks parents >128K 95.40% (#1/7) - genuinely verified retrieval; docked because 1M is still labelled beta and the local entry still reflects a 200K deployment.
- **Multimodal: 74/100.** Text + image in only, with FigQA 78.30% (#2/3) as the sole visual-reasoning datapoint; no audio, video or PDF-native input and no generation.
- **Coding: 78/100.** No coding benchmark row at all is published for this ID, so the score is a deliberately conservative placeholder anchored on its agentic-swe-adjacent evidence (Tau2, DeepSearchQA) - treat as unmeasured rather than proven, and roughly a tier below Opus 4.8 on the evidence that does exist.
- **Cost efficiency: 66/100.** Same $5 / $25 list price as Opus 4.8 but at 42.00 tok/s (3.4× slower) and with no cache disclosure; only the Poe $4.30 / $21 route and 39 providers keep it from being the worst value entry here.
- **Overall Score: 82.8/100.** Half-up mean of (90 + 84 + 88 + 74 + 78) = 414 / 5 = 82.8, reduced to **80** because the coding category rests on no benchmark row at all; Cost excluded. Cross-check: the independent LLMBoard composite is 77.7 - the two agree that this release is a strong generalist rather than a coding flagship. Best fit: long-document writing, factuality-critical drafting and tau-style tool agents at 1M context; choose Opus 4.8 for verified software engineering.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables; 30 of 44 rows are published and only retrievable rows are cited) + local `meta.json` for free-tier notes; no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
