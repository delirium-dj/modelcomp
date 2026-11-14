- Source: Meta/Muse Ember
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember (a.k.a. Muse Ember 1.0)
- **Short description:** Meta Superintelligence Labs' 2026-11-09 smallest, cheapest Muse model, purpose-built as a low-cost execution sub-agent for high-frequency, repetitive, verifiable agent subtasks (tool calls, code subtasks, routing, extraction). The **first model trained using Muse Wonder Full**, and designed to pair with Wonder as planner. A distinct model; per the project identity roster the stealth name `crouton-alpha` is a revealed alias of this model and is never a separate folder.
- **Provider / access:** Meta Model API with model ID `muse-ember` / `muse-ember-1.0` (`meta/muse-ember` on OpenRouter); closed weights, no self-hosting. Thinking effort adjustable from `minimal` to `max`.
- **Release / knowledge:** 2026-11-09; knowledge cutoff: no verified public score found.
- **IDs:** `muse-ember-1.0`. No free Zen ID verified.
- **Context window:** **1,048,576 tokens (1M)**, with up to **524,288 tokens** maximum output; text, image, audio and video in, text out.
- **Modalities:** **text, image, audio and video in; text out** — long documents, transcripts and mixed-media inputs without truncation; native tool calling with each step's result chained into the next.
- **Pricing (as of 2026-11-14):** **$0.10 / 1M input, $0.50 / 1M output, $0.004 / 1M cached input** up to 200K input; above 200K the rates become **$0.30 / $1.50 / $0.012** per 1M (third-party tracker). A launch analysis notes Meta lists no long-context tier at all — a source discrepancy, reported separately.
- **Architecture:** Proprietary, closed weights. A third-party low-confidence estimate suggests **~150B total / ~10B active MoE** — explicitly an estimate, not a vendor disclosure.

### Raw benchmarks found

Meta's launch post / evaluation report (max reasoning effort, as reported by Meta; figures labelled vendor-published):

Agent / tool use:

- AutomationBench-AA (657 Zapier business workflows): **37.8%** (GPT-6 Luna 20.2%, Claude Haiku 5.5 13.9%)
- Agents' Last Exam (internal): **61.6** (comparands 57.1 / 57.0)
- OSWorld 2.1 (partial / binary credit): **69.5 / 33.8** (Haiku 5.5 68.9 / 27.8, GPT-6 Luna 50.5 / 17.0)
- PerceptionBench (with tools): **80.6** (Haiku 5.5 78.6, GPT-6 Luna 62.8)
- Artificial Analysis AA Intelligence Index (max): **36**; an AgentBreaking page lists **36.0** with AA-Omniscience accuracy **21.1%**
- Cost per AA task (max): **$0.136** (Haiku 5.5 $0.411, GPT-6 Luna $0.152) — AA summarised this as matching Haiku at one third the cost per task
- AI BENCHY (third-party, `high` effort): score **9.2**, rank **#38**, **79.7%** pass rate, reliability **10.0**, $0.156 total cost; `medium` effort: score **8.5**, 8.2 consistency
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index **36** (max) as above; AA-Omniscience accuracy **21.1%**
- GDP.pdf-AA: **22.8** (tied with GPT-6 Luna)
- GPQA Diamond / HLE / LCR / CritPt: no verified public score found

Coding:

- Terminal-Bench 4.0: **40.9%** — leads its price class (Haiku 5.5 39.2%, GPT-6 Luna 16.4%); Terminal-Bench 4.0 cited as top-20% of 64 models by AgentBreaking
- AA Coding Agent Index: **46** (Haiku 5.5 37, GPT-6 Luna 31)
- FrontierCode 2.0-AA: **27.2** — trails Haiku 5.5's 34.9
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M input / 512K output with long-document and transcript handling; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** 37.8% AutomationBench-AA (1.9x GPT-6 Luna), 69.5 OSWorld 2.1 partial, 80.6 PerceptionBench, and a 79.7% third-party pass rate with chained tool results; capped by vendor-published figures using differing public harnesses and an AA index of 36.
- **Reasoning: 79/100.** AA index 36 at max with 61.6 on the internal Agents' Last Exam; capped by AA-Omniscience 21.1%, GDP.pdf 22.8 and no GPQA/HLE figures.
- **Context window: 93/100.** 1M input with an exceptional 512K max output, text/image/audio/video input and no vendor long-context surcharge (per launch analysis); capped by a conflicting third-party >200K rate tier and no retrieval benchmark.
- **Multimodal: 93/100.** Text, image, audio and video input with strong mixed-media long-document handling and 80.6 PerceptionBench; capped by text-only output and no published audio/video benchmark score.
- **Coding: 84/100.** 40.9% Terminal-Bench 4.0 and a 46 AA Coding Agent Index lead its price class; capped by a weak 27.2 FrontierCode 2.0 and no SWE-bench figure.
- **Cost efficiency: 98/100.** $0.10/$0.50 with $0.004 cache reads, ~1/3 the cost per AA task of Haiku 5.5 at matched scores, and a $0.001/message third-party estimate — outstanding value. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 88, 79, 93, 93, 84 = 87.4 → 87. Best fit: high-volume agent execution subtasks paired with a larger planner model, where cost per completed task and a 1M window dominate.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Muse Ember article retrieved via public web search excerpt (release, positioning, Muse Wonder Full lineage), plus a launch-evaluation summary reproducing Meta's published benchmark table and third-party trackers (AgentBreaking, AI BENCHY, BenchGecko) for specs, pricing, index figures and effort-specific scores — all explicitly labelled third-party or vendor-published. Conflicting long-context pricing claims are reported separately. Identity handling follows the project's generated roster: `crouton-alpha` is a revealed stealth alias of Muse Ember and is never scaffolded or written as a separate model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Muse Ember — 百度百科 (retrieved via search excerpt; release, positioning)](https://baike.baidu.com/item/Muse%20Ember/69677100)
  - [Meta Releases Muse Ember, a 1M-Context Model — Go Crypto Venture (Meta launch benchmark table)](https://gocryptoventure.com/meta-releases-muse-ember-a-1m-context-model-for-high-volume-agent-work)
  - [Muse Ember — AgentBreaking (third-party specs, AA index, Terminal-Bench)](https://agentbreaking.com/models/meta--muse-ember)
