# Muse Ember 1.0 — findings by GLM 5.3 Flash

- Source: Meta (`muse-ember-1.0`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's smallest multimodal reasoning model (revealed 2026-11-09, successor of the Crouton Alpha stealth preview) for high-volume agentic execution — tool calls, coding subtasks, routing and document extraction; text, image, audio and video in. Built to pair with Muse Wonder/Spark in cost-tiered agent stacks.
- **Provider / access:** Meta Model API, OpenAI-SDK-compatible endpoint, ID `muse-ember-1.0`; also OpenRouter `meta/muse-ember` and Google Cloud Marketplace (`muse-ember-1-0`). The OpenCode Zen stealth route `opencode/crouton-alpha(-free)` retired 2026-11-09 with `muse-ember-1.0` as its named successor. Chat Completions API.
- **Release / knowledge:** revealed 2026-11-09 (Meta blog + dev page); knowledge cutoff not published — unverified.
- **IDs:** `muse-ember-1.0` (Meta Model API), `meta/muse-ember` (OpenRouter). No standing free tier on the named API routes (the retired Crouton Alpha Free Zen lane was the free preview).
- **Context window:** 1M total ("Context window (Mtok): 1M" official pricing table); max output 524,288 tokens per models.dev — the largest published output cap in this dataset.
- **Modalities:** Text, image, audio and video in ("Multimodality at scale" — multimodal understanding in high-volume agent workflows); text out. Tool calls, structured output, adjustable temperature; reasoning ("smallest reasoning model").
- **Pricing (as of 2026-11-11):** ≤200k context: $0.10 in / $0.50 out per 1M, cached input $0.004; >200k context: $0.30 in / $1.50 out, cached $0.012. Muse Code subscription route ($5–$200/mo) covers the wider Muse family.
- **Architecture:** proprietary, closed weights; positioned as Meta's most efficient model (the former Crouton Alpha stealth lane, revealed at launch). Partner telemetry: Cloudflare reports up to 30% faster tail latency than its comparison model on multi-repo investigation; You.com measured p95 2.2s on coding quests with 36–48% fewer output tokens than leading open-weight models.

### Raw benchmarks found

Agents (Meta-published "max" comparisons vs Claude Haiku 5.5 and GPT-6 Luna, both max):

- AutomationBench-AA (E2E business workflows): **37.8** (Haiku 5.5 13.9, GPT-6 Luna 20.2)
- Agents' Last Exam (end-to-end agent tasks): **61.6** (Haiku 57.0, Luna 57.1)
- Personal Superintelligence Index (Meta internal composite): **46.8** (Haiku 36.1, Luna 37.0)
- OSWorld 2.1 (computer use across desktop apps): **69.5%** partial / **33.8%** binary (Haiku 68.9/27.8, Luna 50.5/17.0)
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Index: **36** (Haiku 5.5 36, GPT-6 Luna 28)
- PerceptionBench with tools (fine-grained visual perception): **80.6** (Haiku 78.6, Luna 62.8)
- GDP.pdf-AA (professional work over long documents): **22.8** (Haiku 20.8, Luna 22.8)
- GPQA Diamond, HLE, LCR / MLCR, CritPt, Omniscience: no verified public score found

Coding:

- Terminal-Bench 4.0 (agentic terminal coding, best published harness): **40.9** (Haiku 39.2, Luna 16.4)
- Coding Agent Index-AA (coding in real agent harnesses): **46** (Haiku 37, Luna 31)
- FrontierCode 2.0-AA (real engineering tasks judged on mergeability): **27.2** (Haiku 34.9, Luna 25.2)
- SWE-bench Verified / LiveCodeBench / DeepSWE / SWE-Marathon / Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (1M window specified, no MRCR / RULER / GraphWalks value published)

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld 2.1 69.5% partial (best of its set), Agents' Last Exam 61.6 (best), AutomationBench-AA 37.8 (2–3x Haiku/Luna) plus strong third-party subagent telemetry (You.com p95 2.2s, Cline subagent endorsement); capped below frontier models by absolute values (Fable 5.2: OSWorld 89.3, AutomationBench 51.4).
- **Reasoning: 79/100.** AA Index 36 ties Haiku 5.5 and beats GPT-6 Luna (28); PSI 46.8 and GDP.pdf-AA 22.8 confirm solid mid-tier knowledge work; no hard science/knowledge benchmark published.
- **Context window: 96/100.** 1M total with an extraordinary 524K max output (top published tier); no public retrieval measurement keeps it below 100.
- **Multimodal: 82/100.** Text + image + audio + video input (the 75–90 video/PDF-in band); PerceptionBench 80.6 best-in-set and OSWorld computer-use vision best-in-set justify the upper half of the band; text-only output keeps it below the audio-out/any-non-text-out tier.
- **Coding: 80/100.** Terminal-Bench 4.0 40.9 and Coding Agent Index-AA 46 both best-of-set (agentic coding is the strength); FrontierCode 2.0-AA 27.2 trails Claude Haiku 5.5 (34.9) on mergeable engineering, capping the score.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M (≤200k) — near the ~$0.10/$0.20 = 97–99 anchor, with $0.004 cached reads; the >200k tier ($0.30/$1.50) is still cheap; the only reason it is not higher is the >200k step-up.
- **Overall Score: 85/100.** Mean of the five non-cost dims (86+79+96+82+80)/5 = 84.6. Best-fit recommendation: the default subagent/worker model for high-volume agentic pipelines — pair it with Muse Wonder or a frontier model doing the planning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official Meta developer model page, models.dev entry, alias/stealth lineage from the repo roster); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Ember developer model page (specs, pricing, benchmark table)](https://dev.meta.ai/models/muse-ember)
  - [Meta — Introducing Muse Ember (launch blog)](https://dev.meta.ai/resources/blog/build-with-muse-ember)
  - [models.dev — meta/muse-ember-1.0 entry](https://models.dev/models/meta/muse-ember-1.0)
  - [OpenRouter — meta/muse-ember API page](https://openrouter.ai/meta/muse-ember)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
