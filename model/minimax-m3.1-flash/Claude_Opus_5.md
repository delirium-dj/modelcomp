# Space Bunny — findings by Claude Opus 5

- Source: undisclosed third-party provider (`stealth/space-bunny-alpha` on OpenRouter; `space-bunny-free` on OpenCode Zen)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny
- **Short description:** An **anonymous stealth reasoning model** that arrived with a full modern feature set and no vendor name: 1M context, text/image/video input, mandatory reasoning with a five-level effort ladder, tool calling, structured output, and a free preview. OpenRouter describes it as a fast anonymous model with strong coding capability and native multimodal input; the provider has published **no parameter count, architecture, training dataset, or model card of any kind** ([OpenRouter listing, via independent field review](https://blog.buildfastwithai.com/space-bunny-review)). **It is one model under three marketplace labels** — Space Bunny (canonical), **Space Bunny Alpha** (`stealth/space-bunny-alpha`, OpenRouter), and **Space Bunny Free** (`space-bunny-free`, OpenCode Zen) — and that aliasing matters, because the three routes carry *different data-handling terms*.
- **Provider / access:** OpenRouter (`stealth/space-bunny-alpha`, OpenAI-compatible endpoint) and **OpenCode Zen** as `space-bunny-free` on `https://opencode.ai/zen/v1/chat/completions` ([Zen docs](https://opencode.ai/docs/zen/)). A community integration repo exists at `spacebunny-app/opencode-space-bunny`. OpenRouter states it is "the gateway rather than the developer or operator" of the stealth model.
- **Release / knowledge:** Appeared **2026-09-23** under the `stealth/space-bunny-alpha` identifier (OpenRouter's listed release date). Knowledge cutoff: no verified public date found — no technical report exists.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter), `space-bunny-free` (Zen), `opencode/space-bunny-free` in this repo's routing. **A genuine free ID exists on both routes**, and the folder's metadata correctly sets `noFreeId: false`.
- **Context window:** **1,000,000 tokens**, with a **separate 524,288-token maximum completion ceiling** — by far the largest output budget of any model in this dataset (Claude Opus 5 and GPT-class tiers cap at 128K). Important caveat from the field guide: **reasoning tokens consume the same completion budget**, so 524K is a ceiling rather than an expected answer size.
- **Modalities:** **Text + image + video in → text out.** No media generation — it understands images and video and returns text or tool requests. Reasoning: **mandatory and non-optional**, with **low / medium / high / xhigh / max** effort levels; OpenRouter's catalogue defaults to `max` while a separate Space Bunny builder defaults to `low`. Tool calls: yes, including `tool_choice`, response formatting and structured output — but **JSON Schema enforcement is not listed**, so structured responses must be validated before any downstream side effect.
- **Pricing (as of 2026-10-08):** **$0 input, $0 output** on OpenRouter during the stealth preview; **free** on OpenCode Zen's `space-bunny-free` route. This is explicitly preview pricing, not a commitment — anonymous models can change provider, limits or commercial terms when the experiment ends. **Privacy differs by route, and this is the single most important practical fact about the model:** OpenRouter states that **prompts and completions may be retained by the anonymous provider** (though not used for training), while **OpenCode Zen's Space Bunny Free route carries explicit zero-retention and no-training terms** — Zen's own docs list it among the free models whose "provider follows a zero-retention policy and does not use your data for model training", and notably **excludes it** from the list of free models whose data "may be used to improve the model".
- **Architecture:** **Undisclosed.** No parameter count, no activation scheme, no training description, no licence beyond the hosted terms. The strongest available evidence on provenance is **independent tokenizer fingerprinting**: YFarmX reports **exact token-count agreement with MiniMax-family models** — a **24/24 match** in one OpenCode study and a broader **50/50 match** in another measurement set — and classifies the model as highly consistent with MiniMax lineage, with a checkpoint newer than MiniMax M3 and **M3.1 proposed as a hypothesis**. I record that as strong family evidence and an unconfirmed checkpoint, not as an identity. Worth noting as a methodological point: when probed, **the model itself answered that it was created by OpenAI and named GPT-5** — a self-report that contradicts its own tokenizer signature and should carry no evidential weight.

### Raw benchmarks found

> **The standardized-benchmark record is essentially empty, and that is the defining feature of this entry.** BenchLM has no entry; Artificial Analysis has no entry; there is no SWE-bench, Terminal-Bench, GPQA, MMMU, HLE, τ²-bench, MCP or long-context benchmark result of any kind. What *does* exist is a set of independent **field tests** — small, targeted, reproducible probes rather than leaderboard benchmarks — and I score them as what they are.

Agent / tool use:

- **AI BENCHY: 56.1% pass rate, 10.0 reliability, 6.5 benchmark score, rank #204** on its tracked leaderboard. Its strongest category on that page is domain-specific performance; **instruction following is its weakest**.
- **Terminal-Bench (any version), τ²/τ³-bench, OSWorld, MCP-Atlas, GDPval-AA, Toolathlon, Claw-Eval, BrowseComp: no verified public score found**
- Capability surface verified at the interface level rather than by benchmark: tool calling, `tool_choice`, structured output, JSON output supported but **no JSON Schema enforcement listed**

Reasoning / knowledge:

- **GPQA Diamond, HLE, MMLU-Pro, AIME, CritPt, AA-LCR, Artificial Analysis Intelligence Index, AA-IFBench, AA-Omniscience: no verified public score found.** There is no aggregate index and, critically, **no hallucination measurement at all**.
- The only reasoning-adjacent measurement is the AI BENCHY composite above, whose own category breakdown flags instruction following as the weak point.

Coding:

- **No standardized coding benchmark exists.** No SWE-bench Verified or Pro, no LiveCodeBench, no Aider Polyglot, no FrontierCode, no SciCode.
- OpenRouter *positions* it around strong coding capability; community OpenCode users report good performance on planning, research and simple software-building tasks. The field review is explicit that these "should not be confused with standardized benchmark scores", and I agree.

Multimodal:

- Independent field probes: **8/8 simple colour-image probes identified correctly**, and **14/14 repeated text-and-image requests returned successfully**
- **No video test of any kind was found**, despite video being an advertised input modality
- No MMMU, CharXiv, OmniDocBench, ScreenSpot, Video-MME or OCR number found

Long context:

- **The one substantive measurement in the whole record:** an independent OpenCode experiment placed **three hidden codes inside an input of roughly 200,000 tokens, and Space Bunny returned all three in the correct order**. That is a focused retrieval probe rather than an MRCR-class benchmark, but it is a real needle test at a real depth — which is more than most 1M-window models in this dataset can show.

Throughput (measured, and unusually well):

- OpenCode TokenDyno 24-hour averages: **94.3 tokens/s on OpenCode Go**, **84.9 tokens/s on OpenCode Zen**; latest route-specific tests **89.9** and **74.5** tokens/s
- A separate free-model monitor reports an average response time of about **1.66 seconds**

### Normalized scores (1–100)

- **Tool use: 56/100.** The interface surface is complete — tool calling, `tool_choice`, structured output, a five-level effort ladder — and **AI BENCHY's 10.0 reliability score** is a meaningful signal that the endpoint behaves consistently. But there is **not one agentic benchmark result in existence** for this model: no Terminal-Bench, no τ²-bench, no OSWorld, no MCP-Atlas. A 56.1% pass rate on one private 22-test-class suite at rank #204 cannot carry the dimension, and the missing JSON Schema enforcement is a real production gap for agent use.
- **Reasoning: 55/100.** Reasoning is *mandatory* on this model with five effort levels, which is architecturally serious — and completely unmeasured. **No GPQA, no HLE, no MMLU-Pro, no AIME, no index, and no hallucination rate.** The only evidence is a composite 6.5 score at rank #204, with the benchmark's own category breakdown naming **instruction following as its weakest area** — which for a reasoning-mandatory model is the least reassuring place to be weak. Scored at the midpoint because the model is demonstrably functional, not because anything supports more.
- **Context window: 86/100.** The strongest dimension, and the only one where the evidence genuinely supports a high score. A **1,000,000-token window with a 524,288-token completion ceiling** is the largest output budget in this dataset by a factor of four, and — unusually for a 1M-window model here — someone actually tested the window: **three needles recovered in correct order from ~200K tokens**. That is a narrow probe, not MRCR, which is why this sits at 86 rather than higher; but compared with the several 1M-window models in this pass that have *zero* retrieval evidence, Space Bunny has more than most.
- **Multimodal: 62/100.** Text, image **and video** input is a broad surface, and the image path is at least verified to function (8/8 colour probes, 14/14 repeated requests). But those are smoke tests, not capability measurements — there is no MMMU, no chart, no document, no OCR and no GUI-grounding number — and **the advertised video capability has not been tested publicly at all**. Credit for breadth and confirmed basic function; no credit for quality, because none has been measured.
- **Coding: 56/100.** OpenRouter markets it on coding and community users report useful planning and build behaviour, but **there is no SWE-bench, no LiveCodeBench, no Aider Polyglot and no coding benchmark whatsoever**. The field review that is most positive about the model states plainly that "the current public evidence does not justify calling Space Bunny the best coding or reasoning model overall", and that is the honest position. Scored at the midpoint on the strength of a 1M window plus tool support mapping well onto repository work, with nothing measured to confirm it.
- **Cost efficiency: 94/100.** **$0 input and $0 output on both routes**, delivered at genuinely useful speed — **85–94 tokens/s** sustained on OpenCode routes and ~**1.66s** average response — with a 1M window, video input and mandatory reasoning included. On the Zen `space-bunny-free` route it additionally carries **zero-retention, no-training terms**, which is better privacy than several *paid* models in this dataset. Docked 6 points for two disclosed risks rather than price: the preview pricing is explicitly temporary and could end without notice, and on the **OpenRouter route the anonymous provider may retain prompts and completions** — so the free lunch is route-dependent.
- **Overall Score: 63/100.** Mean of the five non-cost dims (56 + 55 + 86 + 62 + 56) / 5 = 63.0. Best fit: a free evaluation and routing candidate — very large-context research, repository-scale reading, screenshot and diagram analysis, and multimodal agent experiments — on the **Zen zero-retention route**, with a known production model kept as fallback. The score is middling not because the model performed badly but because **almost nothing about it has been measured**: an anonymous provider, no technical report, no standardized benchmark on any leaderboard, a tokenizer fingerprint pointing at MiniMax that nobody has confirmed, and a model that misidentifies itself as GPT-5 when asked. Provenance and measurement are the gaps, not demonstrated capability.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — an independent field review and specification guide (OpenRouter listing details including the 2026-09-23 release date, 1M context, 524,288-token completion ceiling, text/image/video input, the five-level mandatory reasoning ladder, tool-calling and structured-output support with no JSON Schema enforcement, $0 preview pricing, the route-dependent retention terms, the YFarmX tokenizer-fingerprint analysis reporting 24/24 and 50/50 MiniMax-family matches and the unconfirmed M3.1 hypothesis, the model's unreliable GPT-5 self-identification, the AI BENCHY 56.1%/10.0/6.5/#204 result with its category breakdown, the 3-of-3 needle recovery from ~200K tokens, the 8/8 colour-image and 14/14 repeated-request probes, and the TokenDyno throughput figures), the OpenCode Zen documentation (the `space-bunny-free` ID, $0 pricing, and its explicit placement in the zero-retention / no-training group rather than the data-may-be-used group), and the `spacebunny-app/opencode-space-bunny` integration repo. BenchLM and Artificial Analysis were checked and have **no entry** for this model, so the absence of every standardized benchmark — and of any hallucination measurement — is reported as the central finding rather than proxied. The MiniMax fingerprint is treated as family evidence and **no MiniMax benchmark was imported**, since the checkpoint is unconfirmed and `model/minimax-m3/` is a separate folder. Field probes are scored as probes, not benchmarks. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
