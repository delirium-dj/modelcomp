# Space Bunny Alpha (Space Bunny Free) — findings by Big Pickle

- Source: anonymous / undisclosed provider (`stealth/space-bunny-alpha` on OpenRouter; `space-bunny-free` on OpenCode Zen and OpenCode Go)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (stealth codename; OpenCode lists the same weights as **Space Bunny Free**)
- **Short description:** An anonymous, vendor-undisclosed **reasoning** model that appeared on OpenRouter late on 2026-09-23 and was simultaneously opened as a 7-day, 100%-free unlimited preview on OpenCode Zen and OpenCode Go. Its headline distinction is hardware: a 1,000,000-token context window with a 524,288-token maximum completion ceiling, mandatory chain-of-thought with a five-step effort ladder, and text/image/video input — at $0. No other entry in this dataset combines free + 1M + 524K output. **Identity is unconfirmed**: a reconstructed prompt matches OpenAI's Harmony (GPT-OSS) format, while 24/24 matching token-count probes point to a MiniMax-family tokenizer (MiniMax M3.1 proposed). Treat as an alias-free entry, but do not attribute it to any lab.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` (OpenAI-compatible Chat Completions at `https://openrouter.ai/api/v1/chat/completions`); OpenCode Zen `space-bunny-free` (`https://opencode.ai/zen/v1/chat/completions`); also on the OpenCode Go subscription. Chat Completions only. OpenRouter prompts/completions may be retained but are not used for training; OpenCode's Zen docs state zero retention and no training use for this model.
- **Release / knowledge:** listed 2026-09-23 (OpenRouter); knowledge cutoff not published.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter), `space-bunny-free` (OpenCode Zen and Go). No Zen *paid* ID and no weights.
- **Context window:** **1,000,000** tokens (models.dev records 1,048,576) with a separate **524,288**-token maximum completion ceiling — reasoning tokens count against that ceiling. These are provider-listed capacities, not measured retrieval scores.
- **Modalities:** text, image and video in; **text out** only (including code and SVG). Reasoning is **mandatory** and cannot be disabled — OpenRouter exposes `reasoning.effort` ∈ {low, medium, high, xhigh, max} with `max` as the catalog default, and reports no `none` option. Tool calling supported; JSON response format supported but **without JSON Schema enforcement**.
- **Pricing (as of 2026-09-25):** **$0.00 in / $0.00 out per 1M on both OpenRouter and OpenCode** — explicitly a limited-time 7-day preview (OpenCode's own copy: "free for a limited time"). Historical precedent for this stealth-launch pattern (Ox Alpha → GLM-5.3-Flash, Union Alpha → Pareto) is a 7–14 day window before normal commercial pricing. Free-tier caveats apply hard: it is an anonymous, unreleasable-vendor endpoint, the free window is dated, and OpenRouter may retain prompts.
- **Architecture:** **undisclosed** — parameter count, training data and architecture are all withheld. Only weak public forensics exist: a custom >150K-token vocabulary (not `o200k_base`, not Llama), a reconstructed system prompt using `system`/`developer` roles with `analysis`/`commentary`/`final` channels plus a `# Juice: {budget}` header (Harmony-shaped), and a MiniMax-compatible tokenizer signature. Claims of a sparse-MoE / linear-attention design, ~20–35B active parameters and speculative decoding appear only in unsourced commentary and are **not** treated as verified.

### Raw benchmarks found

> Evidence base is thin: the model is two days old and no vendor, Artificial Analysis or SWE-bench numbers exist. Everything below is third-party and, where a non-standard harness is used, flagged as provisional.

Agent / tool use:

- AI BENCHY (aibenchy.com, 22 private tests with repeated attempts, high reasoning): **7.0/10**, **12/22 fully passed**, **62.1% attempt pass rate**, 27.38s average response, 8.5/10 run consistency, 10.0/10 API reliability
- AI BENCHY category scores: **Tool Calling 10.0/10**, **Data parsing / extraction 10.0/10**, Puzzle Solving 8.3, Domain specific 7.7, Combined 6.5, Anti-AI Tricks 6.4, Instruction following 6.2, Coding 6.2, **General Intelligence 4.2/10**, **Trivia 3.0/10**
- AI BENCHY cross-model placement: GPT-6 Sol 6.0 **9.9**, GPT-5.5 **9.3**, Qwen3.8-27B **8.4**, MiniMax M3 **7.5**, **Space Bunny Alpha 7.0**, gpt-oss-120b 6.1 — i.e. it is the weakest of the six measured models on that suite, despite being 4.7× faster than Qwen3.8-27B per response (27.38s vs 167.89s)
- Reasoning-effort sensitivity (AI BENCHY): high **7.0**, max 6.9, xhigh 6.5, medium 6.3, low 5.9 — a narrow 1.1-point spread, so effort tuning buys very little
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.0%** — *provisional*: a private 60-question subset run by spacebunnyalpha.com, not the standard 198-question set, so it is **not** directly comparable to the published reference figures in the same table (GPT-6 Sol 95.45%, GPT-5.5 93.6%, MiniMax M3 92.9%, Qwen3.8 Flash 91.7%, Qwen3.8-27B 89.2%, gpt-oss-120b 80.1%)
- MMLU-Pro: **75%** — private evaluation; sits between gpt-oss-20b (74.8%) and gpt-oss-120b (80.8%) on that chart, well below Qwen3.8-27B (84.3%)
- HLE / LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- AI BENCHY coding category: **6.2/10**; combined (coding + instruction following): 6.5/10
- SVG generation: qualitatively the model's standout — five long-form SVG compositions (astronaut bunny, Mona Lisa replica, pelican on a bicycle, raccoon/dog/jet ski, sunset beach) rendered complete, with consistent character detail and colour; an artistic-quality signal, **not** a benchmark number
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found
- Negative community signal: AICrier reports "pronounced shortcomings in physics simulations and sandbox coding evaluations" (unquantified, unverified)

Long context:

- **3/3 hidden codes recovered in correct order in a single 200K-token run** (200,044 local / 200,187 reported prompt tokens) — an independent OpenCode Go probe via the stealthprint repo. This is the only measured retrieval evidence, and it covers 200K of the advertised 1M.
- No MRCR / RULER / GraphWalks number published.

Operational facts:

- Speed: OpenRouter P50 **87 tok/s**, P50 latency **1.07s** (snapshot 2026-09-24 00:28 UTC). TokenDyno 24h averages on the same HTTP-routing writing task: OpenCode Go **94.3 tok/s** (1.2s first text, 7/7 successful), OpenCode Zen **84.9 tok/s** (1.6s, 4/4). Third-party commentary claims 118.5 tok/s and 380ms TTFT; unverified — its probe scripts ship those values as hardcoded defaults, so they are excluded.
- Availability: OpenRouter 3-day inference availability **94.98%**, reachability 97.70%, 24h availability 95.60%.
- Token efficiency: 305,989 output tokens on the AI BENCHY suite vs Qwen3.8 Flash's 913,989 — **67% fewer output tokens** on identical benchmarks.
- Identity forensics: 24/24 matching token-count probes against MiniMax M3 and M2.5 on the same gateway (family match, not an identification); Harmony-format prompt reconstruction; custom >150K tokenizer tuned for Chinese + Rust/C++/Go + video frames.

### Normalized scores (1–100)

- **Tool use: 60/100.** Perfect 10/10 in both AI BENCHY tool calling and data extraction, a 62.1% attempt pass rate and 27.38s average response (4.7× faster than the Qwen3.8-27B reference run) show genuinely clean, quick function use; capped at 60 because the only measured suite places it **last but one of six** (7.0 vs MiniMax M3 7.5 and gpt-oss-120b 6.1) and there is no Terminal-Bench, τ³-Banking, GDPval or MCP Atlas evidence at all.
- **Reasoning: 62/100.** GPQA Diamond 82.0% (provisional subset) and MMLU-Pro 75% land it between gpt-oss-20b and gpt-oss-120b on knowledge, and the effort ladder moves AI BENCHY only 5.9→7.0, i.e. more effort buys almost nothing; capped by a 3.0/10 Trivia and 4.2/10 General Intelligence score — a model that reasons carefully and knows little.
- **Context window: 92/100.** 1,000,000 tokens (1,048,576 per models.dev) with a verified 3/3 needle retrieval at 200K and a 524,288-token completion ceiling; scored 92 rather than the 95–100 top of the ≥1M tier because the only retrieval evidence stops at 200K, no RULER/GraphWalks exists, and 1M is a provider-listed capacity on an anonymous endpoint.
- **Multimodal: 78/100.** Text, image and video input verified in both models.dev and provider catalogs, with text-only output and no JSON Schema enforcement; placed in the 75–90 "+video/PDF in" band and capped there because no MMMU-Pro, Video-MME or document benchmark has been run against it.
- **Coding: 60/100.** Solid real-world SVG and code generation with tool calls, and the free + 1M + 524K-output combination is genuinely attractive for large-generation coding work; capped by a 6.2/10 AI BENCHY coding score, an AI BENCHY ranking below MiniMax M3, and total absence of SWE-bench / LiveCodeBench / SciCode / DeepSWE measurements.
- **Cost efficiency: 100/100.** $0.00 in and $0.00 out on both OpenRouter and OpenCode during the 7-day preview — the methodology's "$0 = 100" case exactly, with no data-usage caveat beyond the dated free window and OpenRouter's possible prompt retention.
- **Overall Score: 70/100.** (60 + 62 + 92 + 78 + 60) / 5 = 70.4 → 70. Best fit: nothing durable — grab it for the free window as a long-context / huge-output scratchpad and SVG generator, but it is two days old, unattributable, unbenchmarked against any standard agentic or coding suite, and priced at zero only until the reveal.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-25
- Method: public internet research (OpenRouter model listing, OpenCode Zen/Go model catalogs, models.dev API catalog, spacebunnyalpha.com independent field guide, the stealthprint OpenCode Go probe, aibenchy.com suite, AICrier launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Space_Bunny.md`, using the same headings.
