# Mercury Edit 2 — findings by MiMo 2.6 Flash

- Source: Inception Labs (`inception/mercury-edit-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2 — Inception Labs' diffusion LLM (dLLM) purpose-built for next-edit prediction and fill-in-the-middle (FIM) autocomplete in code editors. Not a chat/agent model: it exposes no Chat Completions endpoint, only `v1/fim/completions` and `v1/edit/completions`. Not an alias; it supersedes Inception's previous next-edit model and sits alongside the Mercury chat family (Mercury 2 / 2.5 / 3).
- **Short description:** a specialized code-editing model that predicts the next edit from recent-edit history and codebase context, aligned to human accept/reject feedback with KTO; top use case is low-latency inline edit suggestions (Zed, ProxyAI).
- **Provider / access:** Inception API `https://api.inceptionlabs.ai` — FIM endpoint `v1/fim/completions` and NextEdit endpoint `v1/edit/completions` (OpenAI-compatible client libs; **no chat endpoint for this model**). Integrated in Zed's edit-prediction system and ProxyAI.
- **Release / knowledge:** launch post frontmatter published 2026-10-29; Inception's official X announcement post for Mercury Edit 2 carries a 2026-03-31 timestamp — the two channels disagree on date, both are cited in the signature. Knowledge cutoff: not published.
- **IDs:** `mercury-edit-2`.
- **Context window:** **32K** FIM / **32K** NextEdit, max output **8,192** — first-party Inception docs model table (retrieved 2026-11-13). Third-party trackers (BenchLM, Serenities AI) list 128K, which matches Mercury *2*'s chat window and is not corroborated by the docs for this model — first-party value used, discrepancy noted.
- **Modalities:** text in / text out. **Non-reasoning** (BenchLM classifies "Non-Reasoning"); no reasoning-effort parameter; no tool calling or structured outputs in the docs feature column (both are listed for Mercury 3 but not for Mercury Edit 2); no vision/audio/PDF.
- **Pricing (as of 2026-11-13):** $0.25 / 1M input, $0.75 / 1M output, $0.025 / 1M cached input (first-party docs + launch post). New platform accounts get 10M free tokens; a 1-month free Zed promotion was included at launch.
- **Architecture:** proprietary diffusion LLM (parallel token denoising); parameters undisclosed; trained on curated edit datasets with an unpaired RL method (KTO) on human accept/reject feedback; closed weights.

### Raw benchmarks found

> The launch post names a four-benchmark suite — three open-sourced ([Instinct](https://huggingface.co/datasets/continuedev/instinct-data), [FIM / HumanEval Infilling](https://github.com/openai/human-eval-infilling), [Next-edit Prediction](https://github.com/lurf21/NextEditPrediction)) plus one internal next-edit benchmark. FIM is validated by executing test cases; the other three use LLM-as-a-judge against a gold-standard edit; the reported quality number is the average of the four.

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found** — the model is an editor-inline predictor, not an agent; no agentic harness entry exists in any catalog checked.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / BenchLM overall: **no verified public score found** — BenchLM's canonical page (`benchlm.ai/models/mercury-edit-2`, updated 2026-11-13) reports **0 of 823 benchmarks covered, Overall Score "Coming soon", unranked**; Artificial Analysis `/models/mercury-edit-2` → 404. BenchLM classifies it Non-Reasoning by design.

Coding (its home turf — next-edit quality, vendor-measured):

- **Next-edit quality composite: 75.6% at 221 ms latency** (Inception official X post, 2026-03-31) — vs **Zeta 2 64.4%**, **Claude 4.5 Haiku 71.4%**, **GPT-5.4 Nano 73.5%** on the same suite (vendor-run, LLM-judge on 3 of 4 benchmarks).
- **Accept rate +48%**, **shown-edit rate −27%** vs its predecessor (launch post, 2026-10-29) — relative deltas, not absolute scores.
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** — BenchmarkList 404 for this slug; no independent transcription of the vendor suite found anywhere (searches 2026-11-13).
- Speed: **221 ms end-to-end** on the vendor's representative request set (same X post); Inception markets the Mercury line at 1,000+ tok/s on commercial NVIDIA GPUs (family-level claim, not re-measured here).

Long context:

- No long-context retrieval reported (MRCR/RULER row absent); 32K window with 8,192 max output is the catalog limit.

### Normalized scores (1–100)

- **Tool use: 30/100.** No agentic benchmark row of any kind (no TB/Tau/GDPval/Claw-Eval), and the product has no tool-calling capability — its integration surface is editor inline suggestions, scored at the floor-plus level for being a real, widely shipped editor tool rather than zero-presence.
- **Reasoning: 25/100.** Non-reasoning model by classification (BenchLM) with zero GPQA/HLE/Index evidence; the 75.6% composite measures edit correctness, not reasoning — capped by design.
- **Context window: 25/100.** First-party 32K FIM/NextEdit sits well below the 100K tier floor (<100K scales down to 10–49); the competing 128K third-party figure is uncorroborated for this model.
- **Multimodal: 15/100.** Text in / text out only (tier default).
- **Coding: 55/100.** Strong specialized evidence — best-in-suite 75.6% next-edit quality beating Claude 4.5 Haiku (71.4%) and GPT-5.4 Nano (73.5%) at 221 ms, plus a +48% accept-rate gain — but capped hard by the absence of any general coding-suite number (SWE-bench/LiveCodeBench/SciCode all absent; BenchLM 0/823), so it can only be rated on its narrow niche.
- **Cost efficiency: 95/100.** $0.25/$0.75 with $0.025 cached lands between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (92) reference points; near-floor price for an always-on inline predictor.
- **Overall Score: 30/100.** (30 + 25 + 25 + 15 + 55) / 5 = 30.0 → **30**. Best-fit recommendation: a fast, cheap, genuinely good *next-edit predictor* for Zed/ProxyAI-style inline completion — not a general coding agent, not a reasoning model, and not comparable to chat models on this scale; pick it for autocomplete latency, not for tasks.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-13
- Method: public internet research (DuckDuckGo HTML, Inception first-party docs model table and launch blog, official Inception X announcement, BenchLM canonical page, Serenities AI, BenchmarkList 404 check, Artificial Analysis 404 check); scores are normalized 1–100 interpretations, not official vendor scores. All raw numbers are vendor-run on a partly-internal suite — flagged as such, never upgraded to independent verification.
- Reference URLs:
  - [Inception — Introducing Mercury Edit 2 (launch post, four-benchmark methodology, KTO training, pricing)](https://www.inceptionlabs.ai/blog/introducing-mercury-edit-2)
  - [Inception docs — Models table (endpoints, 32K/8,192, $0.25/$0.75/$0.025)](https://docs.inceptionlabs.ai/get-started/models)
  - [Inception on X — 75.6% quality at 221 ms vs Zeta 2 64.4% / Claude 4.5 Haiku 71.4% / GPT-5.4 Nano 73.5%](https://x.com/_inception_ai/status/2039025542167695803)
  - [BenchLM — Mercury Edit 2 (page exists; 0/823 benchmarks covered, Overall "Coming soon", unranked)](https://benchlm.ai/models/mercury-edit-2)
  - [Serenities AI — Mercury Edit 2 specs (cost/context rows only, no capability scores)](https://serenitiesai.com/benchmark/models/mercury-edit-2)
  - [Zed docs — edit prediction, other providers (Mercury Edit 2 integration)](https://zed.dev/docs/ai/edit-prediction#other-providers)
- Future sources: if BenchLM's coverage lands (0/823 → scored rows), an independent transcription of the Instinct/FIM/NEP suite appears, or Inception publishes per-benchmark absolutes, re-research and update this file using the same headings.
