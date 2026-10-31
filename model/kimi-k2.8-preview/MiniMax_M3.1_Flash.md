# Kimi K2.8 Preview — findings by MiniMax M3.1 Flash

- Source: Moonshot AI (`moonshotai/kimi-k2.8-preview`; served in Kimi Code as `kimi-for-coding`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview — Moonshot AI's mid-tier coding and agentic checkpoint, fully rolled out in Kimi Code on 2026-09-11. It is a **distinct serving profile that replaced Kimi K2.7 Code at the same model ID**, not a renamed K3 and not an alias of K2.7 Code.
- **Short description:** Kimi Code's default coding/agent model: a 1M-context multimodal MoE with adjustable thinking effort (low / high / max, `max` by default) that Moonshot describes as "performance close to K3" with "significantly more efficient thinking than K2.7 Code". It is Kimi's everyday coding tier, sitting below the K3 / K3.1 Pro flagships.
- **Provider / access:** Kimi Code (subscription product) at the model ID `kimi-for-coding` — Kimi Code Console API key works against OpenAI-compatible (`https://api.kimi.ai/coding/v1`) and Anthropic-compatible (`https://api.kimi.ai/coding/`) base URLs, so third-party agents (Claude Code, Codex, OpenCode) can call it. Third-party gateways also expose it as a pay-as-you-go route: APIMaster `kimi-k2.8-preview` and Tencent Cloud TokenHub (via TrustedRouter) `moonshotai/kimi-k2.8-preview`. **Moonshot's own public Open Platform has no K2.8 line** (platform.kimi.ai/docs/models lists `kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`, `kimi-k3`, `kimi-k2.7-code`, `kimi-k2.7-code-highspeed`, `kimi-k2.6` only).
- **Release / knowledge:** 2026-09-11 (Kimi Code "What's New" release notes; tracked by llm-stats, llm-releases, models.dev and opencode.ai). Knowledge cutoff: not published.
- **IDs:** `kimi-for-coding` (Kimi Code, = K2.8 Preview), `moonshotai/kimi-k2.8-preview` (canonical id on models.dev / opencode.ai / TrustedRouter), `kimi-k2.8-preview` (APIMaster gateway id), `tencent/kimi-k2.8-preview` (Tencent Cloud TokenHub route). **No OpenCode Zen route exists** for this model in the live Zen catalogue (fetched 2026-10-31).
- **Context window:** up to 1,048,576 tokens (Kimi Code model-configuration page, models.dev `limit.context` 1,000,000, opencode.ai "1M"). Max output: not published (opencode.ai shows "-"). The full 1M window requires Plus-and-above membership on new plans (Allegretto-and-above for 1M on legacy plans).
- **Modalities:** input text + image + video; output text (+ tool calls / code). Reasoning: yes, with `reasoning_effort` low / high / max inside Kimi Code (max is the K2.8 default; K3 defaults to high); models.dev lists none / minimal / low / medium / high / xhigh / max. Tool calling and structured output: yes. Thinking-off requests to K3 or K2.8 are served by **K2.8 Preview in no-thinking mode** — it doubles as the flagship's fast path.
- **Pricing (as of 2026-10-31):** no per-token price on Moonshot's public platform — access is bundled with a Kimi membership (Plus and above on new plans, Andante and above on legacy plans) with optional Extra Usage billed in RMB once quota is spent. Gateway routes are cheaper per token: **$1.00 in / $4.00 out / $0.25 cached** per 1M (models.dev + opencode.ai catalogue; APIMaster live check 2026-09-22 found one active route at $1/$4), and Tencent Cloud via TrustedRouter measured at $1.055 in / $4.22 out / $0.2638 cached with p50 TTFT 2.21 s (last sample 2026-10-31).
- **Architecture:** proprietary, no public weights or licence; llm-releases records "Mixture-of-Experts, parameters undisclosed", and Moonshot has published no model card. Because it replaced K2.7 Code at the same endpoint, a shared MoE design (1T total / 32B active) is plausible — an inference, not a confirmed spec.

### Raw benchmarks found

Agent / tool use:

- SWE-Residual (arXiv:2610.25899, submitted 2026-10-19, mini-swe-agent harness, DeepSWE v1.1 + Terminal-Bench 2.1): **13.0% residual-start success vs 57.8% clean-start on DeepSWE v1.1 — a 44.8-point drop**, the largest of the five evaluated agents; averaged over both source benchmarks **50.3% clean / 16.8% residual**, ranking 4th of 5 behind GPT-6-Sol (68.5/35.0), Gemini-3.8-Flash (59.9/17.1) and GLM-5.3-Flash (53.5/14.8), ahead of Qwen-3.8-Flash (42.2/21.6)
- Terminal-Bench 2.1: **≈42.8% clean-start / ≈20.6% residual-start** (derived from the paper's published average 50.3/16.8 and its DeepSWE row 57.8/13.0 — marked provisional, not a directly printed cell)
- Terminal-Bench 2.0/2.1 leaderboard row, Tau3-Banking / Tau2-Bench, GDPval-AA Elo, Agents' Last Exam, MCP-Atlas, Toolathon: **no verified public score found**
- Kimi Code release notes: vendor claim of "improved coding & agent performance over K2.6" (a percentage delta quoted in search snippets of the What's New page; the page body itself did not render for direct fetch, so the exact figure is unverified)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR-MLCR / CritPt / Omniscience: **no verified public score found** (llm-releases records "No benchmark scores recorded yet"; no Artificial Analysis page exists for K2.8)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Only proxy is qualitative and vendor-side: "performance close to K3" and "more efficient thinking than K2.7 Code" (Moonshot, release notes) — K3's 93.5% GPQA Diamond figure belongs to K3 and does not transfer

Coding:

- DeepSWE v1.1: **57.8% clean-start task-weighted success** (mini-swe-agent, SWE-Residual paper)
- Terminal-Bench 2.1: **≈42.8% clean-start** (derived, see agent section)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE (vendor table): **no verified public score found** — Moonshot published no benchmark table for this checkpoint
- Residual-state behaviour (SWE-Residual, DeepSWE track): among failed continuations, agents "submit with exactly the same tests failing" in 58.9–88.2% of runs (pooled across the five agents); the paper's acceptance-bias analysis is DeepSWE-only and pooled, so no per-model attribution is possible

Long context:

- 1M-token window is vendor-documented (Kimi Code docs, models.dev, opencode.ai), but **no long-context retrieval benchmark (MRCR / RULER / GraphWalks) was published for K2.8**: no verified long-context retrieval figure found.

### Normalized scores (1–100)

- **Tool use: 50/100.** The only measured agentic evidence is SWE-Residual: clean-start **≈42.8% on Terminal-Bench 2.1** (derived) and 57.8% on DeepSWE v1.1, i.e. just below the 45–60% Terminal-Bench band that maps to 50–70, with residual-start performance collapsing to 20.6% / 13.0%. Capped at 50 because there is **no verified Terminal-Bench leaderboard row, no Tau2/Tau3, no GDPval-AA Elo and no Agents' Last Exam number** for this checkpoint, and it finished 4th of 5 agents in the only independent agentic study that included it.
- **Reasoning: 45/100.** Weakest-supported dimension: **no verified public score found** for GPQA Diamond, HLE, LCR/MLCR, CritPt or any Artificial Analysis index; llm-releases states outright that no benchmark scores are recorded. Scored at the provisional mid-low point because the only quantified evidence is agentic (DeepSWE 57.8% clean start), because Moonshot positions the checkpoint as a coding/agentic tier rather than a reasoning flagship, and because its own stated strength is thinking *efficiency* rather than reasoning accuracy. Treat this number as the least reliable line in this report.
- **Context window: 95/100.** 1,048,576 tokens (Kimi Code model table, models.dev `limit.context`, opencode.ai) sits in the ≥1M tier (95–100). Held at 95 rather than 100 because no ≥98% retrieval-at-512K+ measurement exists and no long-context retrieval benchmark was published.
- **Multimodal: 78/100.** Text, **image and video** input with text output (Kimi Code model table: "Multimodal input: Image, video"; models.dev and opencode.ai agree) places it in the "+video" band (75–90). Inside the band rather than at its top because there is no audio path, no non-text output modality and no published MMMU-Pro / Video-MMMU measurement.
- **Coding: 60/100.** Independent **DeepSWE v1.1 57.8% clean-start** and **Terminal-Bench 2.1 ≈42.8%** (mini-swe-agent) sit below the mid band (65–75) and far below the 90–100 frontier reference (DeepSWE 74%+, TB2.1 85%+, SciCode 55%+, Coding Index 70%+ together). No SWE-bench Verified, SWE-bench Pro, LiveCodeBench or SciCode figure exists for this checkpoint, and the vendor has published no coding table either.
- **Cost efficiency: 90/100.** At the measured gateway price of **$1 in / $4 out per 1M** (cached $0.25) this sits right at the "$1.25/$4.25 ≈ 88" reference point, slightly better on input and cached reads. Note that Moonshot itself sells it only through a membership (no public per-token line), so the $1/$4 figure comes from resellers rather than a first-party price sheet.
- **Overall Score: 65.6/100.** Half-up mean of the five quality dims (50 + 45 + 95 + 78 + 60) / 5 = 65.6. Best fit: long-context multimodal coding work on a budget, and as the fast/no-thinking path behind Kimi K3 inside Kimi Code. Weakest fit: anything needing published, independently verified frontier quality — the model is cheap and huge-context, but its only independent measurement places it mid-pack on agentic tasks and it has no reasoning record at all.

### Agreement notes (conflicting readings)

- **The dataset `meta.json` for this folder is wrong.** It records "No such Moonshot model could be verified as of 2026-10-20" and "Unverified - no published figure" for context and modalities, with a `noFreeId` flag. Live sources contradict that: the Kimi Code model-configuration page lists **K2.8 Preview** as a shipped model version (1,048,576 context, image + video, low/high/max effort), models.dev carries `moonshotai/kimi-k2.8-preview` (release 2026-09-11, cost $1/$4/$0.25, `open_weights: false`), opencode.ai data lists it with 0 usage, llm-stats tracks the release date, APIMaster and TrustedRouter sell it, and llm-releases lists it as proprietary/MoE/1M. The negative record also missed the Kimi Code product surface entirely (it only probed the Open Platform docs, pricing sheet and changelog, where K2.8 indeed has no line — because K2.8 ships inside the Kimi Code subscription product, not the public API).
- **Moonshot's platform really does lack a K2.8 line** (platform.kimi.ai/docs/models), while third-party catalogues do have one. Both are true at once: K2.8 Preview is a real checkpoint served through the Kimi Code product id `kimi-for-coding` and re-sold by gateways, without a first-party per-token SKU.
- **"No published benchmarks" vs an aggregator's numbers:** the DemandSphere release tracker snippet quotes "78% SWE-bench, 90.4% GPQA Diamond, 99.7% AIME 2025" for "Kimi K2.8 Preview" (page is JS-rendered; the snippet is all that could be read). The 78% SWE-bench figure matches the published Kimi K2.7 Code score (78.2%, Vals AI), the predecessor that K2.8 replaced at the same endpoint, and the same snippet set elsewhere attributes K3's 93.5% GPQA Diamond to K2.7 Code. Moonshot's own release notes publish no numbers, and llm-releases records none — so these are treated as mis-attributed lineage figures, not as K2.8 measurements.
- **Open weights conflict:** TrustedRouter labels the route "open weights" and its provider table shows "Weight format: Unknown"; opencode.ai, models.dev (`open_weights: false`) and llm-releases ("Weights: Not released") all say the opposite. The conservative reading — proprietary, no released weights — is used.
- **Price conflict:** Moonshot publishes no K2.8 token price (membership-bundled, Extra Usage in RMB), llm-releases shows "-", while models.dev/opencode.ai list $1/$4/$0.25 and TrustedRouter measures $1.055/$4.22 from Tencent Cloud. The gateway price is used for the Cost score, with the caveat that it is not a first-party list price.
- **Terminal-Bench row is derived, not printed:** SWE-Residual's Kimi-K2.8-Preview row (13.0 / 57.8 / 44.8) is the DeepSWE track; its Terminal-Bench cell was reconstructed from the paper's published two-track averages (50.3 clean / 16.8 residual) minus the DeepSWE numbers, and reproduces the paper's own "20.6–34.9 points" Terminal-Bench drop range — so it is consistent, but it is an inference and is labelled provisional.
- **Timing of the sweep:** the 2026-10-19 SWE-Residual paper is the newest and only independent evaluation found for this checkpoint; Moonshot has not shipped a model card, weights or a benchmark table as of 2026-10-31, and the Kimi Code docs note that the model behind `kimi-for-coding` can change without a version bump.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-31
- Method: public internet research (Kimi Code model-configuration and "What's New" documentation, Moonshot Open Platform model list, models.dev `api.json`, opencode.ai data model page and K2.8-vs-K3 comparison, llm-releases model page, llm-stats model page, HokAI review, APIMaster gateway card, TrustedRouter route page, arXiv:2610.25899 SWE-Residual paper plus its alphaXiv summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi Code — Model Configuration](https://www.kimi.com/code/docs/en/kimi-code/models.html)
  - [Moonshot Open Platform — Model List](https://platform.kimi.ai/docs/models)
  - [SWE-Residual: Evaluating Starting-State Robustness of Coding Agents (arXiv:2610.25899)](https://arxiv.org/abs/2610.25899)
  - [OpenCode Data — Kimi K2.8 Preview](https://opencode.ai/data/moonshotai/kimi-k2-8-preview.md)
  - [LLM Releases — Kimi K2.8 Preview](https://llm-releases.com/models/kimi-k2-8-preview)
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
