# Ling 3.2 Flash — findings by MiniMax M3.1 Flash

- Source: Ant Group (Ling-3.2-flash)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.2 Flash (Ant Group's Ling-series native multimodal flash model)
- **Short description:** Ant Group's November 2026 native multimodal MoE model (560B total / 25B active) built for visual understanding, multimodal long-horizon agent work, 3D understanding and medical multimodal tasks. Text, image and video in; text out; 1M-token context; API on Ant Ling / Ant Bailian with OpenAI- and Anthropic-compatible protocols.
- **Provider / access:** Ant Ling platform (Ant Bailian), OpenAI-compatible and Anthropic-compatible Chat Completions; also listed for third-party distribution through OpenRouter and ZenMux by the vendor (not yet present in the public OpenCode Zen catalogue on 2026-11-12, and no OpenRouter listing existed on that date).
- **Release / knowledge:** 2026-11-05 (platform changelog v2.0.6). Knowledge cutoff not published.
- **IDs:** vendor model id `Ling-3.2-flash` (Ant Ling API); repository catalogue id `opencode/ling-3.2-flash`.
- **Context window:** 1,000,000 tokens total, stated by the vendor in the official model documentation. No maximum-output figure is published for the 3.2 generation, and no long-context retrieval measurement has been published.
- **Modalities:** text, image and video in; text out; reasoning mode supported (hybrid reasoning family); tool calling supported through the API surface; OpenAI and Anthropic protocol compatibility; no audio in / no image or video out documented.
- **Pricing (as of 2026-11-12):** free for the first two weeks after launch (changelog and pricing page: "Ling-3.2-flash is free for the first 2 weeks after launch", i.e. roughly to 2026-11-19), then the standard rate resumes. The official pricing page does **not** yet carry a separate Ling-3.2 tariff row; launch coverage (Pandaily, Juejin, FluxBBS) reports $0.30 in / $0.90 out per 1M tokens, about CNY 2 / CNY 6. Treat the $0.30/$0.90 figure as press-reported rather than a published rate card, and the free window as time-limited rather than a standing free tier.
- **Architecture:** sparse Mixture-of-Experts, 560B total parameters with 25B activated per token; 7:1 hybrid attention reported at launch; MoE routing, long-context modelling and native vision-language fusion are the headline design claims. Open weights: not published for 3.2.

### Raw benchmarks found

All numbers below are **publisher-reported** (Ant Group's own evaluation, reproduced by launch coverage and by LMSpeed, which sources them from Benchize). No independent leaderboard run of Ling-3.2-flash was found: Artificial Analysis, BenchLM and LLM Stats have no page for this model, and AI Index states "This model isn't on any leaderboard we cite yet."

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found** for Ling-3.2-flash.
- Agent claims are qualitative only: the vendor names "multimodal long-horizon Agent" as one of four focus areas, and launch coverage describes a visual-feedback self-check loop (the model can treat rendered screens and UI as an observation input and correct its own output) plus adaptive recovery from tool-call failures. No scored agent benchmark accompanies these claims.
- Inference speed (publisher-reported, via Juejin launch write-up): ~280 tokens/s single-user decoding at roughly 30K context on Hopper-class GPUs, about 3.54 ms per token.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**.
- HLE: **no verified public score found**.
- LCR / MLCR: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no listing exists).
- ZEROBench (Sub) (publisher-reported, vendor evaluation via LMSpeed/Benchize): **43.71** (Claude Opus 5 at max effort scored 39.52 on the same run) — fine-grained visual reasoning on the 334 hardest sub-questions of ZEROBench.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**.
- Vision2Web (publisher-reported, 193 real web-building tasks graded with GUI agents and a vision judge): **85.86** for Ling-3.2-flash versus **80.20** for Claude Opus 5 (max) on the same vendor run — the only coding-adjacent score published for this model.
- DesignArena image-to-front-end arena (publisher-reported Elo): **1238**, which the launch coverage places in the arena's top ten alongside Meta, DeepSeek and Anthropic entries.
- Independent hands-on (techgogogo, six-task suite): the reviewer reports SVG physics failures (pelican riding a bicycle upside down without turning, reversed fletching, arrows that miss the target and then drift toward the bullseye), a browser-OS space-shooter that "failed to load", and a Trello board whose card detail and delete interactions did not respond. This is a qualitative counterweight to the vendor benchmark table, not a scored benchmark.

Long context:

- MRCR / RULER / GraphWalks at 512K or 1M: **no long-context retrieval measurement published**. The vendor states that the Ling series "reliably retrieves information regardless of whether it appears at the beginning, middle, or end of the context" and that the 3.2 context is capped at 1M, but no retrieval-percentage number at any length is disclosed.
- Long-context evidence is therefore specification-level only: 1,000,000-token context window, 7:1 hybrid attention, 560B/25B MoE, and a claimed decode rate of ~280 tokens/s at ~30K context.

### Notes on identity

Vendor lineage: Ling is Ant Group's (Ant Intelligence (Hang Zhou) Technology Co., Ltd.) own open-source model family, developed in-house and released through the InclusionAI community. Ling-3.2-flash is the November 2026 successor to Ling-3.1-flash and the first native multimodal member of the current generation (the previous multimodal member was Ling-3.0-flash-VL at 256K context and 124B/5.5B active). The 3.2 generation keeps the 560B/25B MoE shape of 3.1 and adds native image, text and video input plus the "visual feedback closed-loop" mechanism and adaptive error recovery described for the 3.0-VL branch.

Identity cautions: the "1M context, 560B/25B active" description is shared with Ling-3.1-flash, so parameter count and context alone do not identify the model; the distinguishing feature of 3.2 is native video input and native multimodal fusion. Open weights have not been published for 3.2, and the official pricing page still shows only the two-week free launch promotion for this model, with no 3.2 rate row and no published promotion end timestamp. The repository catalogue id `opencode/ling-3.2-flash` does not correspond to an entry in the public OpenCode Zen model list checked on 2026-11-12, so the model was not independently reachable through that catalogue on that date.

### Conflicting evidence (vendor vs independent) and how it was resolved

Vendor: Ant Group's own evaluation claims three benchmark wins over Claude Opus 5 (max) — OmniDocBench 1.5 at 92.21 vs 90.56, ZEROBench (Sub) at 43.71 vs 39.52, and Vision2Web at 85.86 vs 80.20 — plus a DesignArena Elo of 1238. Independent: the same launch week produced a hands-on reviewer test in which Ling-3.2-flash produced physically incorrect SVG scenes, a failing browser-OS game and non-responsive board interactions; the reviewer explicitly notes these were run at maximum thinking depth. Resolution: the vendor scores are recorded as publisher-reported, with no independent replication, and the dimension scores are capped accordingly — the vendor table is credited for multimodal and context capability, while tool use and general coding are scored down for the absence of any tool-use or repository-level coding benchmark and for the contradictory independent build evidence. Pricing conflict: the official pricing page lists only the two-week free promotion for Ling-3.2-flash and no 3.2 rate card, while launch coverage quotes $0.30/$0.90; the press figure is used for cost efficiency with the caveat that it is not an official published rate.

### Normalized scores (1–100)

- **Tool use: 35/100.** No Terminal-Bench, Tau3, GDPval or Claw-Eval number exists for this model; only qualitative vendor claims about long-horizon multimodal agent behaviour, visual-feedback self-correction and error recovery, so the score is a low provisional reading capped by zero measured tool evidence.
- **Reasoning: 48/100.** The only scored reasoning evidence is publisher-reported ZEROBench (Sub) 43.71 on a benchmark whose hardest items are near-universal zero scores, with no GPQA Diamond, HLE or LCR result available to calibrate text reasoning.
- **Context window: 95/100.** The vendor-documented 1,000,000-token context sits in the top tier (95–100); it falls short of 100 because no retrieval measurement at 512K or beyond has been published, and no maximum-output figure is disclosed.
- **Multimodal: 85/100.** Native image, text and video input with architectural vision-language fusion, supported by OmniDocBench 1.5 at 92.21 and ZEROBench (Sub) at 43.71; no audio input or non-text output is documented, which is what keeps it below the 90–100 band.
- **Coding: 52/100.** Vision2Web 85.86 and a DesignArena Elo of 1238 show strong image-to-web-code work, but there is no SWE-bench, Terminal-Bench or DeepSWE score, and an independent six-task build review recorded broken physics in generated SVG, an application that failed to load and unresponsive UI interactions.
- **Cost efficiency: 94/100.** Press-reported list pricing of $0.30 in / $0.90 out per 1M tokens lands between the ~$0.60/$2.20 anchor (about 92) and the ~$0.10/$0.20 anchor (97–99); the two-week free launch window is time-limited and the official rate card for 3.2 is not yet published.
- **Overall Score: 63/100.** A 1M-context native multimodal specialist with strong document and vision numbers and Flash-class serving cost, best suited to document/visual pipelines and long-context multimodal work, but not yet a safe pick for repository-scale coding or tool-driven agents because no tool-use or code benchmark exists for it.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (vendor documentation and changelog, launch coverage, LMSpeed/Benchize benchmark reproductions, one independent hands-on review, leaderboard and aggregator cross-checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ant Group — Ling model documentation (Ling-3.2-flash specs, 560B/25B MoE, 1M context, native image/text/video input)](https://developer.ant-ling.com/en/docs/models/ling/)
  - [Ant Ling — platform changelog, v2.0.6 release of Ling-3.2-flash on 2026-11-05](https://developer.ant-ling.com/en/docs/getting-started/changelog/)
  - [Ant Ling — model pricing page (two-week free launch promotion, published rate cards)](https://developer.ant-ling.com/en/docs/models/price/)
  - [LMSpeed — Ling-3.2-flash benchmark reproduction (OmniDocBench 1.5, ZEROBench Sub, Vision2Web; publisher-reported)](https://lmspeed.net/model/ling-3-2-flash)
  - [Independent hands-on review — Ling 3.2 Flash six-task build test (techgogogo, 2026-11-06)](https://www.techgogogo.com/2026/11/06/ling-32-flash-review-is-this-a-domestic-model/)
  - [AI Index — Ling-3.2-flash model page (no leaderboard coverage, 1M context, Nov 5 2026 release)](https://ai.gotry.io/models/ling-3-2-flash)
