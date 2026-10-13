# Space Bunny Alpha — findings by DeepSeek 4.1 Flash

- Source: anonymous stealth vendor / Space Bunny Alpha (`stealth/space-bunny-alpha`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-25 UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (6 independent sources). This pass re-pulled the model's OpenRouter/OpenCode metadata, the spacebunnyalpha.com field guide (which now carries a previously-missing HLE result), the Codersera identity post-mortem, the spacebunnymodel.com listing page, the BeatAPI explainer and the Hugging Face community guide. Two material changes from 2026-09-25: (1) the free preview has ended (OpenRouter listing expiry `2026-10-05`; BeatAPI records the free model withdrawn 2026-10-06), and (2) a new reasoning datapoint — HLE **46.1%** on a 300-question subset — is now published that the prior pass explicitly listed as missing. Both are reflected below. Everything else remains thin: no vendor card, no Artificial Analysis Index, no public-suite agent/coding run.

## Model card

- **Name:** Space Bunny Alpha (also written `space-bunny-alpha`); the free preview tier on OpenCode Zen is listed as **Space Bunny Free**. Third-party sites now claim the listing re-appeared as the named `minimax/minimax-m3`, but that identity is unconfirmed — treated here as its own entry, not an alias.
- **Short description:** anonymous reasoning preview from an undisclosed provider, listed on OpenRouter under the `stealth` provider on 2026-09-23 with a 1M-token window, native image/video input, mandatory adjustable reasoning and free access during the preview. Strong on structured extraction and tool calling, shallow on general knowledge and trivia; the free window has now closed, and testers reported at least one mid-run checkpoint change.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` (OpenAI-compatible Chat Completions; supports `reasoning`, `reasoning_effort`, `include_reasoning`, `tools`, `tool_choice`, `response_format`, streaming) and OpenCode Zen `opencode/space-bunny-free` (plus OpenCode Go). OpenRouter states it is the routing layer only, not the developer. The listing is now delisted — Codersera reported `expiration_date: "2026-10-05"` and BeatAPI recorded the free model withdrawn 2026-10-06; spacebunnymodel.com claims the same model now runs paid as `minimax/minimax-m3`.
- **Release / knowledge:** listed 2026-09-23 (OpenRouter); knowledge cutoff undisclosed. Testers documented a capability jump around 2026-09-29 and a regression around 2026-10-01 under the one codename, so any benchmark is pinned to an unstated checkpoint date.
- **IDs:** `stealth/space-bunny-alpha`; `opencode/space-bunny-free` on Zen; `space-bunny-alpha` on aggregators (BeatAPI). No disclosed first-party vendor ID; the claimed `minimax/minimax-m3` successor ID is unverified.
- **Context window:** 1,000,000 tokens with a 524,288-token max completion (OpenRouter endpoint metadata; repeated by the spacebunnyalpha.com field guide and Codersera's 5 Oct API pull — the 524,288 cap is unique among OpenRouter's 466 models). One independent 200K-token retrieval test recovered 3/3 hidden codes in order (`github.com/majiayu000/stealthprint`, via the field guide) — still no measured result at 512K+.
- **Modalities:** text, image and video in; text out; reasoning mandatory (efforts low → max; catalog default `max`); tool calls and `response_format` JSON (Codersera: `tool_choice: auto` only). spacebunnymodel.com additionally claims **audio** input, which no other source repeats — flagged, not adopted.
- **Pricing (as of 2026-10-11):** the $0 preview is over. OpenCode/OpenRouter free access ended 2026-10-05/06 (Codersera expiry `2026-10-05`; BeatAPI "withdrew the free space-bunny-alpha model on October 6, 2026"). The claimed paid successor is listed at **$0.30 / $1.20 per 1M** (spacebunnymodel.com; matches MiniMax M3 pricing per Codersera) — applied only as a fallback because the identity is unconfirmed. A third-party router (NanoGPT) showed $0.05/$0.15 during the preview as an auto-routing shadow price.
- **Architecture:** undisclosed, with now-conflicting public hypotheses: MiniMax family, specifically `MiniMax-M3.1-Flash-Preview` (Codersera, ~85% confidence; same token-count family match in the Hugging Face guide and BeatAPI), versus a **GPT-based fusion router** with GPT-6.1 Sol as the reasoning core (spacebunnymodel/Stealth-Models' own field guide, citing Harmony-format channels and `# Juice`), versus **Moonshot Kimi k2** (margrop.net, on "Jade Rabbit" naming and tokenizer cues). The stealth series has historically revealed non-obvious vendors, so the name carries no signal.

### Raw benchmarks found

> Provenance note: this model has no vendor card and no Artificial Analysis
> Index. The numbers below come from named third parties — the **AI BENCHY**
> private-suite leaderboard (`aibenchy.com`, snapshot 2026-09-24/25), the
> **spacebunnyalpha.com** independent field guide (which also publishes its own
> GPQA/MMLU-Pro/**HLE** evaluations, checked 2026-10-11), Codersera's OpenRouter
> API forensic pull (2026-10-05), BeatAPI (2026-09-27) and the Hugging Face
> community guide (2026-09-30). Everything not found is marked as such rather
> than estimated.

Agent / tool use:

- AI BENCHY (**practical task suite**, 22 private tests, high effort): **7.0/10** — 12/22 tests fully passed, 62.1% attempt pass rate, 27.38 s average response; effort ladder high 7.0 > max 6.9 > xhigh 6.5 > medium 6.3 > low 5.9 (https://aibenchy.com/model/stealth-space-bunny-alpha-high/)
- AI BENCHY category split (high run): Tool Calling **10.0/10**, Data parsing/extraction **10.0/10**, Puzzle Solving **8.3/10**, Domain specific 7.7/10, Anti-AI Tricks 6.4/10, Instruction Following 6.2/10, Coding 6.2/10, General Intelligence **4.2/10**, Trivia **3.0/10**; consistency 8.5/10, API reliability 10.0/10 (https://spacebunnyalpha.com/)
- Codersera records `tool_choice: auto` only (`none`/`required`/`function` rejected), matching the MiniMax M2.7 plumbing pattern (https://codersera.com/blog/space-bunny-alpha-stealth-model-2026/)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.0%** on a 60-question subset (spacebunnyalpha.com field guide, "our evaluation", checked 2026-10-11) — a subset, not the full ~198-question run
- MMLU-Pro: **75%** (same source; multiple-choice accuracy, harness details not published)
- HLE: **46.1%** on a 300-question subset of the original dataset, standard error 2.9 pp, ~95% CI 40.4–51.8%, 7 questions unscored; an additional figure of 45.0% is also reported (spacebunnyalpha.com field guide; corroborated as "≈46% on a 300-question portion" by the Hugging Face guide — https://huggingface.co/blog/liliruli/what-is-space-bunny-alpha-and-how-to-access-it)
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **not scored**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-bench Pro: **no verified public score found**
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**
- AI BENCHY coding category: **6.2/10** (high run — above GPT-6 Sol's 6.0 but below Qwen3.8-27B's 8.4)
- Token efficiency, same benchmark runs (field guide, not a correctness score): **305,989 output / 326,078 total tokens vs Qwen3.8 Flash's 913,989 / 931,392** — 67% fewer output tokens
- spacebunnymodel.com markets "standout coding performance", but its listing is an affiliate page and carries **no number** — not adopted

Long context:

- Measured retrieval: **3/3 codes recovered in one 200K-token run**, returned in correct order (200,044 local / 200,187 reported prompt tokens) — independent OpenCode Go test, `github.com/majiayu000/stealthprint`, cited by the field guide (https://spacebunnyalpha.com/)
- No MRCR / RULER / GraphWalks / AA-LCR value found; the 1M window and 524K output ceiling remain provider listings, and the field guide notes capacities are not measured retrieval or generation results.

### Normalized scores (1–100)

- **Tool use: 70/100.** A perfect 10.0/10 on both tool-calling and data-extraction categories in a named third-party suite, plus `tools`/`tool_choice`/JSON support, makes it a genuinely competent workflow model. Capped by the absence of any Terminal-Bench, Tau3-Banking or GDPval-AA run, `tool_choice: auto`-only plumbing, weak instruction following (6.2/10) and a 62.1% attempt pass rate.
- **Reasoning: 70/100.** Raised from 68 on new evidence: the field guide's HLE 46.1% (300-question subset) is a strong expert-knowledge result (https://spacebunnyalpha.com/), alongside GPQA 82% (60-question subset) and MMLU-Pro 75%. Deliberately held well below the HLE-derived frontier band because AI BENCHY's General Intelligence 4.2/10 and Trivia 3.0/10 expose shallow breadth, the HLE CI is wide (40.4–51.8%), and no HLE/LCR/CritPt/AA Index from an independent harness exists.
- **Context window: 95/100.** A provider-listed 1M-token window with a 524,288-token completion ceiling is top tier (≥1M = 95–100). A measured 3/3-code retrieval now exists but only at 200K, so it does not earn the 98%-recall maximum reserved for ≥512K.
- **Multimodal: 80/100.** Text, image and video input with text output sits in the +video/PDF-in band (75–90); no audio input (one affiliate page claims audio but no independent source repeats it), no media output, and no vision harness has scored it.
- **Coding: 63/100.** AI BENCHY coding 6.2/10 plus zero SWE-bench, LiveCodeBench, SciCode, Vibe Code or DeepSWE numbers — the 67%-fewer-output-token result suggests an efficient but entirely unproven coder.
- **Cost efficiency: 90/100.** Lowered from 100: the $0 preview has ended (delisting 2026-10-05; free model withdrawn 2026-10-06 per https://beatapi.io/blog/what-is-space-bunny-stealth-model), and the claimed paid successor lists at $0.30/$1.20 per 1M (https://spacebunnymodel.com/what-is-space-bunny) — which the methodology places near ~92 on the $0.10/$0.20 → $0.60/$2.20 curve; 90 is used as a conservative floor because the successor identity is unconfirmed. Free access during the preview was real but is now history.
- **Overall Score: 76/100.** (70 + 70 + 95 + 80 + 63) / 5 = 75.6 → **76**. Best fit: million-token ingestion, structured extraction and tool-calling triage while it was free; not repository-level coding, and no longer a $0 pick.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research across the OpenRouter model/endpoint metadata, the AI BENCHY leaderboard and its published runs, the spacebunnyalpha.com field guide, Codersera's `api/v1/models` forensic pull, BeatAPI's listing explainer, the Hugging Face community access guide, the spacebunnymodel.com listing page and the margrop.net identity analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass note: two dimensions moved on new evidence — Reasoning 68 → 70 (new HLE 46.1% subset result; the prior report listed HLE as missing) and Cost efficiency 100 → 90 (the free preview ended; paid fallback ~$0.30/$1.20). Tool use, Context window, Multimodal and Coding are unchanged for lack of any new verified number. Conflicts surfaced rather than reconciled: identity (MiniMax M3.1-Flash vs GPT-6.1-Sol fusion router vs Moonshot Kimi k2), modalities (audio claimed by one affiliate page only), HLE 46.1% vs weak AI BENCHY General Intelligence/Trivia, and speed (87 tok/s field-guide P50 vs 118.5 tok/s claim). No number here is inferred from another model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
