# Grok Build 0.1 — findings by Big Pickle

- Source: xAI `grok-build-0.1` (aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1 (SpaceXAI / xAI; not a Free-tier model)
- **Short description:** xAI's *fast* coding model, released to the API in public beta on 2026-05-29. It is the same weights that power the Grok Build product, trained specifically for agentic software-engineering work — web development, debugging and MCP support — and xAI bills it as a speedy, economical fallback for general agentic and tool-calling use outside coding too. Two things define it: **100+ tokens/second** and **$1 in / $2 out**. Two things limit it: a 256K window that is half what Grok 4.1 and 4.2 offered, and an almost total absence of published benchmark data. Reasoning is **always on** with no off switch. As of Grok 4.7's September 2026 launch, Grok Build 0.1 is no longer the default model in Grok Build — Grok 4.7 is.
- **Provider / access:** xAI API, plus **OpenRouter**, **Vercel AI Gateway**, and ~15 other routers. Also listed on **OpenCode Zen** at the same $1/$2 (a paid routed SKU, not a free ID). Regions `us-east-1` and `us-west-2`. xAI "priority" service tier doubles the rate to $2/$4.
- **Release / knowledge:** API public beta **2026-05-29** (xAI launch post). The underlying Grok Build product predates that; third-party catalogues variously date the model to **2026-04-16** (tokenstat) and **2026-05-20** (cloudprice) — treat 2026-05-29 as the API GA date. **Knowledge cutoff not documented** in any source located.
- **IDs:** `grok-build-0.1` on xAI and `x-ai/grok-build-0.1` on OpenRouter. Aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`. No OpenCode Zen Free ID — paid everywhere.
- **Context window:** **256,000 tokens**, with a **230,400-token maximum output** (OpenRouter / cloudprice / OpenKey all agree). This is the tightest input/output ratio in the comparison: effectively the whole window can be returned as output. Requests reaching 200K prompt tokens bill at the long-context rate for *all* tokens, so a full-window agentic session costs exactly double.
- **Modalities:** In: text, **image** (OpenKey additionally lists PDF and file attachment support; unverified). Out: text. Reasoning: yes, **always on, not configurable off** (xAI docs list Reasoning: Yes; OpenKey confirms no disable path). Capabilities: function calling, structured outputs. MCP support is an explicit training target per xAI. `logprobs` and `top_logprobs` **are** accepted here (unlike Grok 4.20 and newer), as are `seed`, `temperature`, `top_p`, `stop` and `response_format`.
- **Pricing (as of 2026-09-26):** **$1.00 in / $0.20 cached / $2.00 out per 1M tokens** under a 200K prompt; **$2.00 / $0.40 / $4.00** at or above 200K. xAI's "priority" service tier is $2.00 / $4.00. **Batch API is not supported** on this model — a real limitation for bulk workloads, and one of the few models in this comparison where that is true. No free tier.
- **Rate limits:** 37 requests/second, 10,000,000 tokens/minute — among the most generous limits xAI publishes.
- **Architecture:** Proprietary; parameter count not disclosed. Served at 100+ tok/s, and the only xAI model in the set that trades raw quality for throughput as its primary design goal.

### Raw benchmarks found

- **AA Intelligence Index: 40.7**; **AA Coding Index: 51.5**; **AA Agentic Index: 28.9** (all three via tokenstat, which links its sources to Arena AI and Artificial Analysis)
- **Gert Labs: 49.15%** (benchlm — the *only* benchmark row in that entire 417-benchmark comparison where Grok Build 0.1 carries a sourced number; every Grok 4.5 row reads "not directly comparable")
- BenchLM overall: **no public overall score** — benchlm reports "Evidence status unavailable" for this model
- Output speed: **100+ tokens/second** (xAI launch claim, unverified by an independent harness)
- Terminal-Bench 2.0 / 3.0 / 4.0, SWE-bench Verified / Pro, CursorBench, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE: **no verified public score found**
- GPQA Diamond, AIME 2025, HLE, MMLU-Pro, CritPt: **no verified public score found**
- GDPval-AA, AA-Briefcase, AutomationBench-AA, τ³-Banking, τ²-bench, ITBench, EnterpriseOps: **no verified public score found**
- AA-LCR / MRCR / RULER, MMMU-Pro, Omniscience, LMArena, Creative Writing v3, EQ-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- CyberGym, CADGenBench, HLab, Valkyrie: **no verified public score found** for this model

> **Data-availability note.** This is the thinnest evidence base of any model in this comparison. OpenKey states plainly that "no public benchmark scores are available yet for this model," and benchlm declines to rank it at all. Artificial Analysis has no model page under this slug. Everything above the three AA sub-indexes is either an xAI marketing claim or absent, and the reasoning profile is itself contested — benchlm classifies Grok Build 0.1 as **non-reasoning** while xAI's own documentation says reasoning is always on. Where a number is missing here, it is missing, not estimated.

### Normalized scores (1–100)

- **Tool use: 74/100.** Built for this and honest about it: explicit MCP training, function calling, structured outputs, `tool_choice` and parallel tool support, 37 req/s of headroom, and xAI's own claim that it works best inside real agentic harnesses (Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code, OpenCode). The **AA Agentic Index of 28.9** is the hard number and it is the weakest of its three sub-indexes. 74 sits in the methodology mid band, not higher, because the agentic benchmarks that would confirm it — Terminal-Bench, τ-bench, GDPval, Claw — have published nothing at all.
- **Reasoning: 72/100.** An **AA Intelligence Index of 40.7** is a respectable composite for a speed-first coding model, and reasoning is permanently on, which helps agentic loops. But there is no GPQA, AIME, HLE or MMLU figure anywhere, so the knowledge and hard-maths axes are simply unknown, and benchlm's classification of the model as non-reasoning contradicts xAI's own spec. 72 reflects a competent reasoner on a narrow brief, not a broadly capable one.
- **Context window: 78/100.** 256K clears the 200K boundary into the second tier, but only just, and it is **half** the 2M offered by Grok 4.1, Grok 4.1 Fast and Grok 4.20 in this same comparison — xAI traded window away for speed. The 230K max output is unusually close to the full window, and nothing has been published on retrieval at any length, so the number is a spec, not a measurement.
- **Multimodal: 70/100.** Text and **image** in, text out — the "+image in = 60–70" tier, taken at the top. Screenshot-to-code is the obvious use and the model is trained for web development, so image input is likely well-exercised. No audio, no video, no non-text output. OpenKey lists PDF and file inputs; xAI's own modality line does not, so that is unconfirmed.
- **Coding: 72/100.** The model's entire purpose, and the evidence is thin but not negative: **AA Coding Index 51.5** and **Gert Labs 49.15%**. Trained on agentic coding, debugging and MCP, with `logprobs` and `seed` still supported — a real advantage over Grok 4.20+ for anyone building sampling-based tooling. Capped at 72 by the total absence of SWE-bench, Terminal-Bench, CursorBench, LiveCodeBench and Vibe Code Bench numbers; a "fast coding model" with no repository-scale result published cannot be claimed as a strong coding model, only as a plausible one. The absence of a Batch API also rules it out for bulk offline generation.
- **Cost efficiency: 95/100.** **$1.00 in / $2.00 out with a $0.20 cache rate** is roughly $1.10 blended at 3:1 — comfortably better than the ~$0.60/$2.20 reference that anchors ~92, and on top of that the model runs at **100+ tok/s**, so wall-clock cost on agentic loops is low too. It also keeps `logprobs` and full OpenAI sampling parameters. Held at 95 rather than higher because: prompts past 200K double to $2/$4, the **Batch API is not supported**, and there is no free tier.
- **Overall Score: 73.2/100.** Mean of the five quality dims: (74 + 72 + 78 + 70 + 72) / 5. **Best fit — the cheapest credible high-throughput coding-and-agentic router in the set, chosen for latency rather than capability.** At $1/$2 and 100+ tok/s with a $0.20 cache rate, nothing else here comes close on price-per-token-of-interaction. What you give up: a 256K window, unknown real-world coding quality (no SWE-bench, no Terminal-Bench, no CursorBench anywhere), no Batch API, and an evidence base so thin that this score is more inference than measurement. Use it for interactive edit loops, MCP-driven tooling and high-volume agentic chat; for anything long-running or repository-scale, use Grok 4.7 at $2/$6 with a real benchmark trail.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-26
- Method: public internet research (xAI model docs and `grok-build-0.1.md` machine-readable page, xAI launch post `x.ai/news/grok-build-0-1`, tokenstat, benchlm, OpenKey, cloudprice, OpenRouter catalogue via aiforless); scores are normalized 1–100 interpretations, not official vendor scores. Every number above carries its source; missing rows are stated as "no verified public score found" rather than estimated, and the one contradiction between benchlm and xAI on the reasoning profile is reported rather than silently resolved.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
