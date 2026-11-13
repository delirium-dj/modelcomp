# Big Pickle — findings by Ernie 5.5 Flash

- Source: OpenCode Zen stealth model (`opencode/big-pickle`, display name "Big Pickle")
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (`big-pickle`, OpenCode Zen free stealth model)
- **Short description:** Anonymous free stealth model served by OpenCode Zen; never officially attributed by the vendor, with community/technical consensus pointing at a GLM-4.6-class Chinese open-weight checkpoint. Positioned as a free high-volume coding/agent route.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (free tier, $0), Chat Completions via `https://opencode.ai/zen/v1`; currently listed in the Zen catalog with `owned_by: opencode`.
- **Release / knowledge:** listed in the Zen catalog since early 2026 (catalog entry created 2026-01-12 per Zen `/v1/models` timestamp); no vendor release note or knowledge cutoff.
- **IDs:** `opencode/big-pickle` (Zen), `big-pickle` (catalog id)
- **Context window:** 200,000 tokens total / 32,000 max output (models.dev `big-pickle.toml`; Pi listing) — no vendor page confirms it.
- **Modalities:** text in / text out; reasoning/thinking trace supported. No image, audio or video input.
- **Pricing (as of 2026-11-12):** $0 (free tier on OpenCode Zen); paid Zen plans bundle it. Free-tier caveat: OpenCode may train on free-tier traffic.
- **Architecture:** undisclosed stealth weights; community consensus is a GLM-4.6-family checkpoint (not verified by any vendor).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found for `big-pickle` itself**; the GLM-4.6 proxy figure (49.4% on BenchmarkList) is lineage data only.
- Tau3-Banking / Tau2-Bench: **no verified public score found** (GLM-4.6 proxy 10.5% — lineage only)
- GDPval-AA: **no verified public score found** (GLM-4.6 proxy 934 — lineage only)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (GLM-4.6 proxy 63.2% — lineage only)
- HLE: **no verified public score found** (GLM-4.6 proxy 5.5% — lineage only)
- LCR / MLCR: **no verified public score found** (GLM-4.6 proxy LCR 28.3% — lineage only)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **not indexed** (stealth route, no public profile)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-Atlas direct eval of `big-pickle`: **50.8%** (63/124 tasks; community reproduction published as `big-pickle-swe-atlas`)
- SWE-bench Verified / SWE-Pro: **no verified public score found** (GLM-4.6 proxy SWE-bench 0.68 — lineage only)
- LiveCodeBench: **no verified public score found** (GLM-4.6 proxy 81.0% — lineage only)
- SciCode: **no verified public score found** (GLM-4.6 proxy 38.4% — lineage only)
- Vibe Code Bench: **no verified public score found** (GLM-4.6 proxy 3.1% — lineage only)

Long context:

- No MRCR / RULER / GraphWalks figures; the 200K window is from a third-party model descriptor only.

Reliability evidence (affects scoring, not a benchmark):

- OpenCode issue #50202 (2026-09-20): "Big Pickle (Free Stealth Model) Produces Corrupted, Non-Functional Output" — looping, language drift, mid-sentence stalls reported as unresolved.
- OpenCode issue #54773 (2026-10-12): the model stopped emitting an interleaved reasoning trace (`reasoning_content`), producing shallow answers on multi-step instructions.

### Normalized scores (1–100)

- **Tool use: 50/100.** No direct agentic benchmark exists for this route; the only measured number is SWE-Atlas code QnA (50.8%), and the published reliability reports (corrupted output, lost reasoning trace) argue against a higher agentic score.
- **Reasoning: 58/100.** Unattributed weights with no GPQA/HLE/Index row; the GLM-4.6 consensus proxy (GPQA 63.2, HLE 5.5) is cited as lineage only, and the October 2026 reasoning-trace regression caps it.
- **Context window: 70/100.** 200,000 tokens total (200K = 70 in the tier mapping); no retrieval measurement and no vendor confirmation.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 62/100.** The one direct measurement, SWE-Atlas Codebase QnA 50.8% (63/124), is mid-pack; the GLM-4.6 proxy (LiveCodeBench 81.0, SWE-bench 0.68) would be higher but is lineage, not this checkpoint.
- **Cost efficiency: 100/100.** $0 on the Zen free tier; not counted toward Overall.
- **Overall Score: 51/100.** Mean of tool use 50, reasoning 58, context 70, multimodal 15, coding 62. Best fit: cost-free bulk coding and agent experiments where occasional corruption is tolerable; not for production agent work until the reliability reports are resolved and the weights are attributed.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (OpenCode Zen catalog and docs, models.dev descriptor, community SWE-Atlas reproduction, OpenCode issue tracker); scores are normalized 1–100 interpretations, not official vendor scores. GLM-4.6 figures are lineage proxies, never this model's own scores.
- Reference URLs:
  - [OpenCode Zen models catalog (`big-pickle` entry)](https://opencode.ai/zen/v1/models)
  - [OpenCode Zen docs (endpoints, free tier, pricing)](https://opencode.ai/docs/zen)
  - [models.dev — big-pickle.toml (200K / 32K, text-only)](https://github.com/anomalyco/models.dev/blob/dev/providers/opencode/models/big-pickle.toml)
  - [big-pickle SWE-Atlas direct eval (50.8%, 63/124)](https://github.com/PhillipChaffee/big-pickle-swe-atlas)
  - [OpenCode issue #50202 — corrupted output reports](https://github.com/anomalyco/opencode/issues/50202)
  - [OpenCode issue #54773 — reasoning trace regression](https://github.com/anomalyco/opencode/issues/54773)
  - [BenchmarkList — z-ai-glm-4.6 (lineage proxy only)](https://benchmarklist.com/models/z-ai-glm-4.6)