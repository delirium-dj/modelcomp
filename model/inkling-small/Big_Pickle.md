# Inkling Small — findings by Big Pickle

- Source: Thinking Machines Lab (`thinkingmachines/Inkling-Small`; OpenCode Zen ID `inkling-small`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small (Thinking Machines Lab; weights repo `Inkling-Small`)
- **Short description:** The compact open-weights sibling of Thinking Machines Lab's flagship `Inkling`, trained with the same recipe at roughly a quarter of the size — 276B total / 12B active MoE. It is a genuine separate model, not a tier or alias of `Inkling`: same family and recipe, different weights, 1M context, native image **and** audio input, and roughly a fifth of `Inkling`'s serving cost. Best use case is cheap long-context multimodal reasoning plus real-repository coding; its weakness is agentic tool orchestration (Tau3-Banking 15.5%) and hard-frontier math/science (FrontierMath T4 17.1%, CritPt 8.3%).
- **Provider / access:** Open weights — `huggingface.co/thinkingmachines/Inkling-Small` (Apache 2.0, 532 GB, 32 safetensors shards). Hosted: OpenCode Zen (`inkling-small`), OpenRouter `thinkingmachines/inkling-small`, DeepInfra, Together AI (`inkling-small`), Baseten, Vercel AI Gateway, NVIDIA NIM. All hosted routes are OpenAI-compatible Chat Completions (OpenRouter/DeepInfra report `openai-completions`, `max_completion_tokens`); no Responses-API route found. Self-host via SGLang / vLLM / TokenSpeed / Unsloth; BF16 and NVFP4 numerics.
- **Release / knowledge:** Released 2026-07-30 (Thinking Machines Lab); knowledge cutoff not published (Epoch AI lists it as unknown).
- **IDs:** `opencode/inkling-small` (Zen), `thinkingmachines/inkling-small` (OpenRouter), `thinkingmachines/Inkling-Small` (Hugging Face / DeepInfra), `thinkingmachines/inkling-small` (Together AI). No Free Zen tier found — `noFreeId` applies; cost scored on paid list price.
- **Context window:** 1,000,000 total on OpenCode Zen, with max output listed as 1M (opencode.ai model data, 2026-10-05). Hosted capacity varies and is the real limit in practice: DeepInfra and OpenRouter both serve **524,288** tokens; ApX lists 1.05M. Verified from provider model cards, not from a vendor long-context eval — see the caveat below.
- **Modalities:** Text, image, and audio in (images via hierarchical patch encoder, 40–4096 px per dimension; audio as 16 kHz WAV, ideally under 2 min); text out only. Reasoning: yes, with variable thinking effort (reported at effort = 0.99). Tool calling: yes. JSON mode: yes (DeepInfra flags JSON + function calling). Self-reported vendor training data also included video, but video is not an accepted input on any hosted route found.
- **Pricing (as of 2026-10-05):** $0.50 in / $1.20 out / $0.10 cached read per 1M on OpenCode Zen list price (opencode.ai model data). DeepInfra and OpenRouter both list $0.45 in / $1.20 out / $0.10 cached. apXML quotes a $0.30/$1.20 variant. Paid, no free tier; no data-usage caveat applies because there is no $0 tier.
- **Architecture:** Open-weights Apache 2.0 MoE — 276B total parameters, 12B active per token; 42-layer decoder-only transformer; each token routed to 6 of 256 experts plus 2 shared always-on experts; hybrid local/global attention; natively multimodal with all modalities projected into a shared hidden space; trained on NVIDIA GB300 NVL72 systems on 45T multimodal tokens.

### Raw benchmarks found

All figures below are the **vendor-published** eval table from the official Inkling-Small model card (as mirrored by DeepInfra, which reproduces the full comparison grid; provider notes: SWE-bench numbers use a bash-only harness, Terminal-Bench 2.1 uses Thinking Machines' internal coding harness where web-search contamination was scored 0, and external models' numbers are self-reported). No third-party Inkling-Small agentic leaderboard run was found.

Agent / tool use:

- SWE-bench Verified: **80.2%** (vendor, bash-only harness)
- Terminal-Bench 2.1 (best harness): **64.7%**
- Toolathlon Verified: **54.4%**
- Tau3-Banking: **15.5%**
- MCP Atlas (public / all): **79.6% / 79.2%**
- GDPval-AA v2: **1269 Elo**
- AA-Briefcase: **917**
- BrowseComp (with context management): **77.4%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE (text only): **31.6%**; HLE (with tools): **47.8%**
- AIME 2026: **95.5%**
- HMMT Feb 2026: **90.2%**
- CritPt: **8.3%**
- ARC-AGI-1: **84.0%**; ARC-AGI-2: **40.1%**
- FrontierMath Tier 4: **17.1% ± 5.9** (ixio leaderboard aggregate, scraped 2026-09-03)
- Artificial Analysis Intelligence Index v4.1: **40.0%** (apXML independently reports a 0.25 Artificial-Analysis agentic-index figure at rank #74 — different metric, listed for traceability)
- Epoch Capabilities Index: **150, rank #46 of 251** (was #29 of 231 at release)
- SimpleQA Verified: **20.6%**; AA Omniscience index: **-9.0**
- Global-MMLU-Lite: **86.7%**; MMLU-Pro: no verified public score found for this ID

Coding:

- SWE-bench Verified: **80.2%**
- SWE-bench Pro (public): **55.9%**
- Terminal-Bench 2.1: **64.7%**
- SciCode: **48.7%**
- Vibe Code Bench / LiveCodeBench / DeepSWE: no verified public score found for this ID

Long context:

- No long-context retrieval reported. The vendor publishes a 1M window and a hybrid local/global attention design but no MRCR, RULER, GraphWalks or needle-in-a-haystack number for Inkling-Small, and the largest hosted capacity found is 524,288 tokens. This is a genuine evidence gap, not an implicit pass.

Multimodal (vendor-reported, for the scoring dimension):

- MMMU Pro (Standard 10 options): **74.0%**
- CharXiv RQ (original / with Python): **77.4% / 81.3%**
- Audio MC: **54.9%**
- MMAU (audio understanding): **77.0%**
- VoiceBench (spoken-input assistant tasks): **90.1%**
- IFBench (instruction following): **82.2%**

### Normalized scores (1–100)

- **Tool use: 73/100.** MCP Atlas 79.2% and Toolathlon Verified 54.4% put real weight on structured tool orchestration, and Terminal-Bench 2.1 at 64.7% sits above the 45–60% mid band, with GDPval-AA v2 1269 above the 900–1200 mid band. Capped below the 90–100 frontier tier by Tau3-Banking at only 15.5% and AA-Briefcase 917 — the classic profile of a model that can call tools well but cannot hold a long multi-domain policy conversation.
- **Reasoning: 74/100.** GPQA Diamond 89.5% and HLE-with-tools 47.8% both reach the frontier thresholds (90%+ and 40%+ respectively is where 90–100 starts; 89.5% just misses), AIME 2026 95.5% and HMMT 90.2% are elite, and an AA Intelligence Index of 40.0% is well clear of the 20–35 mid band. Capped by the weak tail: FrontierMath Tier 4 at 17.1% and CritPt at 8.3% show no hard frontier-math/science ability, and SimpleQA Verified 20.6% with an Omniscience index of -9.0 means it confabulates under pressure.
- **Context window: 93/100.** Tier mapping puts ≥1M at 95–100, and 100 specifically requires ≥98% retrieval measured at 512K+ — that measurement does not exist for this model, so the top of the band is unreachable. 93 reflects a verified 1M window on Zen with a documented 524,288 ceiling on two of the largest hosts, which is exactly the "top of 500K–1M, bottom of 1M" placement.
- **Multimodal: 92/100.** Native text + image + audio input with text output puts it in the 90–100 band outright, and the sub-scores justify the high placement rather than the floor: VoiceBench 90.1% and MMAU 77.0% are real audio numbers, MMMU Pro 74.0% and CharXiv RQ 77.4/81.3% are solid vision. Audio MC at 54.9% and the absence of any video or PDF input route keep it off 95+.
- **Coding: 78/100.** SWE-bench Verified 80.2% is a top-decile open-weights result and beats its own 975B sibling's 77.6%, which is the headline here; SWE-bench Pro 55.9% and Terminal-Bench 2.1 64.7% are solidly upper-mid, and SciCode 48.7% approaches the 55% frontier threshold. Capped because SciCode, Terminal-Bench 2.1 and the agentic index (0.25, #74 on apXML) all sit well under the 90–100 reference set, and no independent SWE-bench Verified run exists to confirm the vendor's 80.2%.
- **Cost efficiency: 94/100.** $0.50 in / $1.20 out / $0.10 cached per 1M (Zen list; DeepInfra and OpenRouter are cheaper still at $0.45/$1.20/$0.10) is materially under the ~$0.60/$2.20 ≈ 92 anchor and far under the ~$1.25/$4.25 ≈ 88 anchor for `Inkling`. It would score ~97+ if a $0 Zen tier ever appears; 94 is the paid-price number.
- **Overall Score: 82/100.** Half-up mean of 73 / 74 / 93 / 92 / 78. Best fit: a cheap, genuinely multimodal 1M-context workhorse for document/audio-heavy reasoning and long-repository coding on a budget — but pair it with a stronger orchestrator for multi-step tool workflows, and never as the sole fact source given its 20.6% SimpleQA.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-05
- Method: public internet research (vendor model card and eval table mirrored by DeepInfra, official Thinking Machines model-card page, Hugging Face repo, OpenCode/OpenRouter/Together/DeepInfra pricing and context listings, plus Epoch AI, ixio, apXML and benchmarklist aggregators). Every number above carries its source; gaps are stated as gaps. Scores are normalized 1–100 interpretations per `../../model-comparison.md`, not official vendor scores.
- Known caveats: all agentic and coding headline numbers are self-reported by the vendor on its own harness; no independent Inkling-Small agentic evaluation was found; hosted context is 524,288 on DeepInfra/OpenRouter versus 1M advertised, so the 1M figure is a vendor-and-Zen claim rather than a measured retrieval result.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.1_Flash.md`, using the same headings.