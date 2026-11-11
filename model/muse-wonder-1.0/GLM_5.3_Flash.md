# Muse Wonder 1.0 — findings by GLM 5.3 Flash

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's frontier agentic model (Oct 2026) for long-running personal/professional agents — 1M context, Active Memory + Active Focus, sub-agent delegation and error recovery. The API SKU `muse-wonder-1.0` is distinct from the stronger Muse Wonder Full (`muse-wonder-full-1.0`, Muse Code subscription only); the bare "Muse Wonder" product name resolves to this SKU.
- **Provider / access:** Meta Model API, OpenAI-SDK-compatible endpoint, ID `muse-wonder-1.0`; also OpenRouter `meta/muse-wonder` (Chat Completions; providers: Meta direct + Google Vertex at the same $4/$20) and Google Cloud Marketplace (`muse-wonder-1-0`). Chat Completions API, not Responses.
- **Release / knowledge:** released 2026-10-12 (research blog); knowledge cutoff not published — unverified.
- **IDs:** `muse-wonder-1.0` (Meta Model API), `meta/muse-wonder` (OpenRouter). No free tier found on any cited route.
- **Context window:** 1M total ("Context window (Mtok): 1M" on the official pricing table); max output not published — unverified.
- **Modalities:** Text in; image in for computer use (sees and operates browsers, desktop and mobile apps); text out. Tool calls (incl. parallel), reasoning-effort parameter, JSON/response_format, search-grounding tool documented in the cookbook.
- **Pricing (as of 2026-11-11):** $4.00 in / $20.00 out per 1M; cached input $0.20. Muse Code subscription route ($50 Power / $200 Maximum Usage per month) carries Muse Wonder Full, not this SKU.
- **Architecture:** proprietary, closed weights; trained at the gigawatt-scale Prometheus datacenter on the Muse Spark scaling line. Active Memory (cross-conversation context) and Active Focus (sustained long-task execution) are the two flagship features.

### Raw benchmarks found

Agent / tool use (all "max" effort, Meta-published comparisons vs Full / Fable 5.1 / GPT-6 Astra / Opus 5.5):

- JobBench (professional tool use): **70.5** (Full 75.3, Fable 5.1 73.1, Opus 5.5 75.4)
- MemoryBench (remembering context): **85.6** — best of the comparison set (Full 85.5, Fable 5.1 79.0, Opus 5.5 81.5)
- OSWorld V2.1 (agentic computer use): **72.6%** partial / **34.3%** binary (Full 78.4/39.4, Fable 5.1 80.7/43.1, Opus 5.5 81.8/–)
- AutomationBench-AA (E2E business workflows): **39.1** (Full 45.4, Opus 5.5 41.2)
- Vals Finance Agent V2 (financial analyst research): **56.6** (Full 59.1, Fable 5.1 58.9)
- Harvey LAB-AA (legal agent work): **10.0** (Full 13.1, Opus 5.5 4.2)
- GDP.pdf (professional work): **30.8** (Full 33.2, GPT-6 Astra 34.2)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Personal Superintelligence Index (Meta internal composite, personal + knowledge work): **54.3** (Full 59.1, Opus 5.5 55.2, Fable 5.1 49.9)
- Artificial Analysis Index: **52** (Full 56, Fable 5.1 53, Opus 5.5 58)
- HealthBench Pro (open-ended health queries): **60.5** (Full 62.3, Opus 5.5 65.6)
- GPQA Diamond, HLE, LCR / MLCR, CritPt, Omniscience: no verified public score found

Coding:

- DeepSWE 1.1 (long-horizon coding): **78.8** (Full 79.0, Opus 5.5 74.2, Fable 5.1 67.4)
- SWE-Marathon (ultra-long horizon engineering): **53.1** (Full 57.5 xhigh, Opus 5.5 46.3, Fable 5.1 45.6)
- Terminal-Bench 4.0-AA (agentic terminal coding): **52.0** (Full 57.1, Opus 5.5 59.6)
- ProgramBench (from-scratch programming): **50.0** (Full 59.0, Opus 5.5 70.5)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR / RULER / GraphWalks value published); 1M window from the official pricing table

### Normalized scores (1–100)

- **Tool use: 89/100.** MemoryBench 85.6 (best in set), JobBench 70.5, OSWorld V2.1 72.6% partial and documented parallel tool use + error recovery; capped by mid-pack AutomationBench-AA 39.1, Harvey 10.0 and OSWorld partial trailing Fable 5.1/Opus 5.5.
- **Reasoning: 85/100.** AA Index 52 and PSI 54.3 sit a visible step below Opus 5.5 (58/55.2) with the same effort; HealthBench 60.5 and Vals 56.6 are solid; GDP.pdf 30.8 caps it.
- **Context window: 94/100.** 1M total window (top published tier); max output unpublished, so held just under the 95–100 band top.
- **Multimodal: 65/100.** Image input via computer-use vision (browser/desktop/mobile) is first-class, text-only output; no audio/video I/O — middle of the 60–70 image-in band.
- **Coding: 90/100.** DeepSWE 1.1 78.8 and SWE-Marathon 53.1 are best-or-near-best against Opus 5.5/Fable 5.1 (long-horizon is the strength); Terminal-Bench 4.0-AA 52.0 and ProgramBench 50.0 (vs Opus 70.5) cap the single-shot side.
- **Cost efficiency: 52/100.** $4/$20 per 1M — premium tier pricing (same as Opus 5.5, 2x Sonnet-class); between the $3/$15≈60 and $10/$50≈30 anchors; $0.20 cached input helps.
- **Overall Score: 85/100.** Mean of the five non-cost dims (89+85+94+65+90)/5 = 84.6. Best-fit recommendation: long-running agentic workflows with memory across sessions; pair with a cheaper model for high-volume single-shot coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official Meta developer model page, Meta research blog, OpenRouter API docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Wonder developer model page (specs, pricing, benchmark table)](https://dev.meta.ai/models/muse-wonder)
  - [Meta Research — Muse Wonder: A Frontier Model For Personal & Professional AI Agents](https://research.meta.ai/blog/introducing-muse-wonder/)
  - [Meta Muse Wonder model card (PDF report)](https://research.meta.ai/static/muse-wonder-model-card/)
  - [OpenRouter — meta/muse-wonder API page](https://openrouter.ai/meta/muse-wonder)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
