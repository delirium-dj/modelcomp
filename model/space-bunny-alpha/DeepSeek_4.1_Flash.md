# Space Bunny Alpha — findings by DeepSeek 4.1 Flash

- Source: anonymous stealth vendor / Space Bunny Alpha (`stealth/space-bunny-alpha`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (also written `space-bunny-alpha`); the free preview tier on OpenCode Zen is listed as **Space Bunny Free**. Not a variant/alias of any other entry in this dataset.
- **Short description:** anonymous reasoning preview from an undisclosed provider, listed on OpenRouter under the `stealth` provider on 2026-09-23 with a 1M-token window, native image/video input, mandatory adjustable reasoning and free access during the preview. Strong on structured extraction and tool calling, shallow on general knowledge.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` (OpenAI-compatible Chat Completions; supports `reasoning`, `reasoning_effort`, `include_reasoning`, `tools`, `tool_choice`, `response_format`, streaming) and OpenCode Zen `opencode/space-bunny-free`. OpenRouter states it is the routing layer only, not the developer; the anonymous provider may retain prompts/completions (not used for training) under the Stealth Model Terms.
- **Release / knowledge:** listed 2026-09-23 (OpenRouter); knowledge cutoff undisclosed.
- **IDs:** `stealth/space-bunny-alpha`; `opencode/space-bunny-free` on Zen. No disclosed first-party vendor ID.
- **Context window:** 1,000,000 tokens with a 524,288-token max completion (OpenRouter endpoint metadata; independently repeated by the spacebunnyalpha.com field guide, checked 24 Sep 2026). Provider-listed capacity — no measured retrieval result exists.
- **Modalities:** text, image and video in; text out; reasoning mandatory (efforts low → max; catalog default medium); tool calls and `response_format` JSON (no JSON-schema enforcement); no media output.
- **Pricing (as of 2026-09-25):** $0 per 1M input and output while the preview lasts (OpenRouter, OpenCode Zen and TPS all list $0.00); a third-party router (NanoGPT) shows $0.05/$0.15 per 1M as its auto-routing shadow price. Retention terms make it unsuitable for private code or customer data.
- **Architecture:** undisclosed. Circulating, unverified identity hypotheses: MiniMax family (24/24 tokenizer probe deltas matched named MiniMax endpoints, field-guide probes) and an OpenAI GPT-OSS-style model (a reconstructed prompt resembles the Harmony format). The stealth series has historically revealed non-obvious vendors, so the name carries no signal.

### Raw benchmarks found

> Provenance note: this model has no vendor card, no Artificial Analysis score and
> no public-suite run. The numbers below come from two named third parties — the
> **AI BENCHY** private-suite leaderboard (`aibenchy.com`, snapshot updated
> 2026-09-24, 364 models evaluated) and the **spacebunnyalpha.com** independent
> field guide (checked 24 Sep 2026). They are thin but attributable and dated;
> everything not found is marked as such rather than estimated.

Agent / tool use:

- AI BENCHY (**practical task suite**, 22 private tests, high effort): **7.0/10** — 12/22 tests fully passed, 62.1% attempt pass rate, 27.38 s average response; effort ladder high 7.0 > max 6.9 > xhigh 6.5 > medium 6.3 > low 5.9
- AI BENCHY leaderboard rank: **#161 of 364** (high), #172 (max), #204 (xhigh), #214 (medium)
- AI BENCHY category split (high run): Tool Calling **10.0/10**, Data parsing/extraction **10.0/10**, Puzzle Solving **8.3/10**, Domain specific 7.7/10, Anti-AI Tricks 6.4/10, Instruction Following 6.2/10, Coding 6.2/10, General Intelligence **4.2/10**, Trivia **3.0/10**; consistency 8.5/10, API reliability 10.0/10
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.0%** on a 60-question subset (spacebunnyalpha.com field guide, "our evaluation", checked 24 Sep 2026) — a subset, not the full ~198-question run
- MMLU-Pro: **75%** (same source; multiple-choice accuracy, harness details not published)
- HLE / LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **not yet scored** (Command Code lists "not yet scored"; LM Market Cap's 20/100 is a signal-weighted composite, not a benchmark)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-bench Pro: **no verified public score found**
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**
- AI BENCHY coding category: **6.2/10** (high run — above GPT-6 Sol's 6.0 but below Qwen3.8-27B's 8.4)
- Token efficiency, same benchmark runs (field guide, not a correctness score): **305,989 output / 326,078 total tokens vs Qwen3.8 Flash's 913,989 / 931,392** — 67% fewer output tokens

Long context:

- No MRCR / RULER / GraphWalks / AA-LCR retrieval value found; the 1M window and 524K output ceiling are provider listings only, and the field guide notes capacities are not measured retrieval or generation results.

### Normalized scores (1–100)

- **Tool use: 70/100.** A perfect 10.0/10 on both tool-calling and data-extraction categories in a named third-party suite, plus full `tools`/`tool_choice`/JSON support, makes it a genuinely competent workflow model. Capped by the absence of any Terminal-Bench, Tau3-Banking or GDPval-AA run, weak instruction following (6.2/10) and a 62.1% attempt pass rate.
- **Reasoning: 68/100.** GPQA Diamond 82% (60-question subset) and MMLU-Pro 75% are respectable mid-tier results, but AI BENCHY's General Intelligence 4.2/10 and Trivia 3.0/10 expose shallow breadth, and no HLE, LCR, CritPt or AA Index exists to lift it.
- **Context window: 95/100.** A provider-listed 1M-token window with a 524,288-token completion ceiling is top tier (≥1M = 95–100). No retrieval measurement exists, so it does not earn the 98%-recall maximum.
- **Multimodal: 80/100.** Text, image and video input with text output sits in the +video/PDF-in band (75–90); no audio input, no media output, and no vision harness has scored it.
- **Coding: 63/100.** AI BENCHY coding 6.2/10 plus zero SWE-bench, LiveCodeBench, SciCode, Vibe Code or DeepSWE numbers — the 67%-fewer-output-token result suggests an efficient but entirely unproven coder.
- **Cost efficiency: 100/100.** $0 per 1M in and out during the free preview ($0 = 100). Time-limited, vendor-anonymous, and retention applies — a cost score, not an endorsement.
- **Overall Score: 75/100.** (70 + 68 + 95 + 80 + 63) / 5 = 75.2 → **75**. Best fit: free-preview triage of extraction/tool-calling pipelines and million-token ingestion; not repository-level coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-25 UTC
- Method: public internet research across the OpenRouter model/endpoint metadata, the AI BENCHY leaderboard and its published runs, the spacebunnyalpha.com field guide, and listing pages on OpenCode Zen, Command Code, LM Market Cap and NanoGPT; scores are normalized 1–100 interpretations, not official vendor scores.
- Supersede note: this file replaces my own `DeepSeek_4.1_Flash.md.excluded` twin (since deleted — the only sanctioned removal). That twin's premise, "zero verified public benchmark numbers", no longer holds: the 2026-09-24 AI BENCHY snapshot and the 24 Sep GPQA/MMLU-Pro evaluations are attributable, dated third-party results. Evidence remains thin — one practical suite plus two partial evals — so reasoning and coding stay capped, and no number here is inferred from another model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
