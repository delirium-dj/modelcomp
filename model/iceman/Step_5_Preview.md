# Iceman — findings by Step 5 Preview

- Source: OpenCode / Iceman Free (`opencode/iceman-free`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (served as **Iceman Free** on OpenCode Zen, `iceman-contributor-free` on OpenCode Go)
- **Short description:** OpenCode's anonymous stealth reasoning model — text-only, 262K context / 131K output, tool calls and four reasoning levels, free for a limited time in exchange for your prompts and completions being kept and used to improve the model.
- **Provider / access:** OpenCode Zen / Console. Model ID `iceman-free`, Chat Completions at `https://opencode.ai/inference/openai/v1/chat/completions`; on OpenCode Go the ID is `iceman-contributor-free` at `https://opencode.ai/inference/go/openai/v1/chat/completions` (free with a Go subscription from $10/month, requires turning on "Allow paid endpoints that train on request data"). Direct free API use from other clients is refused and referred to the app or a Go plan.
- **Release / knowledge:** appeared unannounced on OpenCode Go 2026-10-24 (417 billion tokens across 10,856 users on day one, lab shown as "Unknown" by design); **Iceman Free was added to OpenCode Zen on 2026-11-10**, free for a limited time. Closed weights, no vendor, no model card, no knowledge cutoff.
- **IDs:** `opencode/iceman-free` (Zen/Console), `opencode-go/iceman-contributor-free` (Go). OpenCode has not stated whether the two are the same model; they share the name, the 262,144-token context and the 131,072-token output limit.
- **Context window:** 262,144 input / 131,072 output tokens (models.dev catalog entry; the Zen entry repeats both numbers). Max output is well past the 64K caveat threshold. No retrieval percentage at any length has been measured.
- **Modalities:** text in, text out — **no image, audio or video input**. Reasoning levels low / medium / high / xhigh (`max` is rejected). Tool calls supported.
- **Pricing (as of 2026-11-11):** **Free** on OpenCode Zen — input, output and cached read all listed at Free — for a limited time; data retained and used to improve the model. On Go the tokens are also free but the plan is paid.
- **Architecture:** undisclosed; closed weights; the lab is deliberately hidden.

### Raw benchmarks found

> **Independent, measured** results from Stealth Models' StealthMark 1.8.x suite (measured **25 October 2026**, with tool calling active). These are the only published measurements for the name — no GPQA, HLE, SWE-bench, LiveCodeBench, Terminal-Bench, Tau3 or Artificial Analysis row exists for this ID.
>
> **ID caveat:** the runs were made against the Go ID **`iceman-contributor`**, not `iceman-free`. Stealth Models states OpenCode has not confirmed the two are one model (shared name, shared 262,144 / 131,072 limits, both called stealth and free for a limited time make it "very likely" the same model). All figures below are therefore lineage data measured under `iceman-contributor`.

StealthMark (overall composite):

- StealthMark overall: **19.2/100**, rank **53 of 58** models
- General Intelligence (spatial, physical and recursive reasoning, multi-step planning): **11.7/100**
- Visual Intelligence (visual construction and detail): **31.0/100**

Picture tasks (each task asks the model to emit the scene as SVG code, so these are code-output results as well as visual ones):

- Beach (creativity, perspective, visual beauty): **46.4/100** — best placing, rank 46/58
- Pelican (subject construction, spatial relationships): **38.0/100**, rank 53/58
- Selfie (visual construction, creative interpretation): **39.3/100**, rank 53/58
- Raccoon (scene composition, interacting subjects): **29.8/100**, rank 55/58
- Ground Truth (physical reasoning, light and visual reconstruction): **20.2/100**, rank 52/58
- Mona Lisa (precise visual recall, portrait reconstruction): **19.3/100**, rank 47/58
- Newton's Mirror (physical, spatial and recursive reasoning): **10.1/100**, rank 54/58

Planning games (no code, no tools — pure multi-step planning from the model's own reasoning):

- Foresight (anticipating threats, planning ahead): **3.2/100**, rank 54/54 — survived 0 of 3 levels
- Latch (cooperative planning, learning from experience): **3.6/100**, rank 51/55 — cleared 1 of 5 levels

Reasoning efficiency (not part of StealthMark; 50 = average, higher is better):

- Single-step reasoning: **29/100**, rank 52/56
- Multi-step reasoning: **37/100**, rank 25/54

Agent / tool use:

- Terminal-Bench 2.1 / 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MRCR / LCR / RULER: no long-context retrieval reported
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- DeepSWE / Vibe Code Bench / Coding Index: no verified public score found
- (Only measured code output: the seven SVG construction tasks above.)

Long context / throughput:

- Throughput measured by Stealth Models, three runs at low reasoning effort on Go: **18–62 tok/s, about 46 on average**, about 0.9 s to first answer token (slower than 50 of 51 models measured on that suite).
- **Identity evidence (not a benchmark):** Iceman's token counts match Microsoft's **MAI Thinking 1** exactly on 23/23 measured phrases, and an identical match holds for Glyph Cluster, the GPT-6 family and gpt-oss-120b, so the tokenizer test narrows the family but not the lab. @aitrackerbot additionally reports that Iceman introduces itself as "MAI, created and trained by Microsoft AI" and that its prompt token counts match MAI Thinking 1 on 20/20 tool schemas and 8/8 text tests. **Unconfirmed by Microsoft or OpenCode.** Note that StealthMark measures the two as distinct entries (Iceman Contributor 19.2 vs MAI Thinking 1 14.1), so the available evidence does not support treating them as one interchangeable model.

### Normalized scores (1–100)

- **Tool use: 45/100.** Provisional. No Terminal-Bench, Tau3, GDPval, Claw-Eval, MCP-Atlas, Toolathlon or SWE Atlas number exists for this ID, so the only measured agentic signal is the multi-step reasoning-efficiency score of 37/100 (rank 25/54 — mid-pack on agentic-workflow efficiency) and the Latch cooperative-planning result of 3.6/100 (one of five levels cleared). Tool calling itself is documented and the StealthMark runs were executed with tool calling active, which is what keeps this out of the bottom band despite the total absence of standard agentic benchmarks.
- **Reasoning: 35/100.** General Intelligence on the independent StealthMark suite is 11.7/100 with Newton's Mirror at 10.1 and the two planning games at 3.2 and 3.6 — deep bottom-band results (0 of 3 Foresight levels survived, 1 of 5 Latch levels cleared), with single-step reasoning efficiency 29/100 (rank 52/56). Capped in the low band and not scored lower only because no GPQA/HLE/Index row exists that could place it below; the independent evidence is uniformly weak.
- **Context window: 72/100.** 262,144 input tokens sits inside the 200K–500K tier (65–84; 200K = 70) and the 131,072-token output ceiling clears the 64K caveat threshold. Not scored higher because no MRCR/RULER/GraphWalks retrieval figure has been measured at any length — the window is a catalog spec, not a demonstrated retrieval result.
- **Multimodal: 15/100.** Text-only in and out, confirmed by both the models.dev catalog entry and OpenCode's own model table. This is the dimension that most depresses the Overall Score.
- **Coding: 40/100.** The only measured code output is the seven SVG scene-construction tasks, which are generated code but creative-visual rather than software-engineering: Visual Intelligence 31.0/100, with the two best single tasks at Beach 46.4 and Pelican 38.0. Every standard coding benchmark (SWE-bench Verified/Pro, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, Coding Index, Terminal-Bench) reads "no verified public score found", which caps this at the low-mid band.
- **Cost efficiency: 100/100.** Verifiably $0 on OpenCode Zen — input, output and cached read all listed at Free — which is 100 by methodology. The caveats are material and are not reflected in the number: the free period is explicitly limited-time, and during it "collected data is retained and used to improve the model", so the price is paid in prompts and completions rather than money.
- **Overall Score: 41/100.** (45 + 35 + 72 + 15 + 40) / 5 = 41.4 → **41**. A free, text-only, mid-length-context stealth reasoning model whose independent measurements place it near the bottom of a 58-model field on novel reasoning, visual construction and multi-step planning; suited to bulk zero-cost code prototypes and synthetic text, not to primary planning or multimodal work.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-11
- Method: public internet research (Stealth Models' StealthMark suite and model guide, OpenCode Zen docs, models.dev catalog entry, OpenCode's usage data page, independent tracker posts). Scores are normalized 1–100 interpretations, not official vendor scores. StealthMark figures were measured under the `iceman-contributor` ID and are labelled as such; no figure was taken from another agent's findings file.
- Reference URLs:
  - [Iceman Contributor — Stealth Models model guide (access, tokenizer test, timeline, 417B tokens day one)](https://stealthmodels.com/iceman-contributor)
  - [Iceman Contributor — StealthMark benchmark results (overall 19.2, General 11.7, Visual 31.0, all nine task scores, games, reasoning efficiency, throughput)](https://stealthmodels.com/benchmarks/models/iceman-contributor)
  - [OpenCode Zen / Console models — Iceman Free listing, free pricing table and privacy note](https://opencode.ai/docs/zen/)
  - [models.dev catalog commit adding Iceman Contributor (262,144 context, closed weights)](https://github.com/anomalyco/models.dev/commit/bbe1123f5298480f56be29d1e0f664053c98c6c8)
  - [OpenCode pull request 58792 adding Iceman to the Go plan](https://github.com/opencode/pull/58792)
  - [@aitrackerbot's token-count test tying Iceman to Microsoft MAI Thinking 1](https://x.com/aitrackerbot/status/2114122939545088257)
  - [OpenCode usage data page (10,856 users, ~417B tokens, lab Unknown)](https://opencode.ai/data)
