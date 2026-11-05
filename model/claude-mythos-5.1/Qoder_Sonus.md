# Claude Mythos 5.1 — independent research report

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5-1`), verified-access deployment
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1.
- **Short description:** Anthropic's verified-access version of the same underlying model as Claude Fable 5.1, with different safeguards for professional cybersecurity and life-sciences work. It is not evidence of a separately trained, inherently more intelligent checkpoint. The existing subject record is retained without creating access-tier variants or changing repository identities.
- **Provider / access:** The [official model-specific documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview) lists Claude API, Amazon Bedrock, Google-managed Claude on Google Cloud, and Microsoft Foundry. Access requires verification and provisioning; a model catalog entry is not unrestricted access. Claude API uses the Messages interface, not an assumed OpenAI Responses route. Claude Security also uses Mythos 5.1, but using that product is not equivalent to unrestricted API access.
- **Release / knowledge:** Released **2026-09-01**; reliable knowledge and training-data cutoff **June 2026**. Current status is Active, verification required, with retirement **not sooner than September 1, 2027**.
- **IDs:** Claude API, Google-managed Cloud, and Foundry: `claude-mythos-5-1`; Bedrock: `anthropic.claude-mythos-5-1`. No free OpenCode Zen ID verified. Defense, Red Team, and Specialized Access are permission tiers, not new model names.
- **Context window:** **1M tokens / 128K maximum synchronous output**, verified in the model-specific API docs. Mythos 5.1 is not in the documented list supporting 300K batch output. The current tokenizer's words-per-token ratio differs from older Claude releases; equal token capacities are not equal text capacities across tokenizers.
- **Modalities:** Text and image input, text output. [PDF documentation](https://platform.claude.com/docs/en/build-with-claude/pdf-support) explicitly includes this exact model and supports text, chart, and page-image understanding. No native audio/video input or non-text generation verified. Writing code that renders videos or uses scientific tools is not a new native modality.
- **Reasoning / integration:** Always-on adaptive thinking, API default high effort. The [current migration guide](https://platform.claude.com/docs/en/models/fable-5-1/migration-guide) says disabling thinking, manual thinking budgets, assistant prefill, and forced tool choices return errors; tool choice auto/none are supported. Conversation history must remain append-only to preserve earlier thinking blocks. Mythos/Fable 5.1 can read older-model thinking, but those older models cannot read 5.1 thinking. Neither 5.1 model supports Priority Tier.
- **Pricing (2026-11-05):** **$10 input / $50 output / $0.25 cache read per million tokens**; cache writes **$12.50 for five minutes / $20 for one hour**. Batch input/output are 50% discounted. No model-specific free API tier was verified. Current CVP help says Pro usage requires credits; Max shares a Fable/Mythos allowance of up to 50% of the weekly usage limit rather than providing a separate Mythos allowance.
- **Privacy / restrictions:** Default **30-day retention** for safety monitoring. ZDR requires express authorization; the migration guide says an incompatible retention configuration can reject requests. Enterprise Frontier Safeguards and interim retention exemptions are eligibility-dependent, not a universal no-logging promise. The current CVP page permits existing authorized retention-exempt organizations to use CVP with ZDR while EFS rolls out.
- **Architecture:** Proprietary; no verified parameter count or open-weight release. Vendor-declared shared underlying model with Fable 5.1 does not make differently safeguarded or fallback-assisted evaluation runs interchangeable.

### Raw benchmarks found

The central evidence distinction is **Mythos-specific measured results versus Fable results**. Anthropic's [launch table](https://www.anthropic.com/claude-fable-and-mythos-5-1) and [current Mythos product page](https://www.anthropic.com/claude/mythos) explicitly say results are for Fable 5.1 unless otherwise noted. Independent sites that repeat that table are not independent Mythos replications.

Agent / tool use:

- **Terminal-Bench 4.0: 60.9%**, explicitly labeled Mythos 5.1 in the official launch table, versus **55.8% for Fable 5.1**, 52.3% for Opus 5, and 42.0% for Fable 5. The 5.1-point Mythos/Fable gap is attributed to earlier cyber-safeguard interventions, not different weights. The launch plots span low through max effort; the extracted table does not fully expose the headline row's detailed run settings, so no unverified harness or budget is added.
- **ExploitGym: 203 successful cases at a two-hour limit / 264 at six hours**, exact Mythos 5.1 figures in indexed text of Anthropic's later [Opus 5.5 system card](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf). The [benchmark-owner leaderboard's indexed row](https://www.cybergym.io/exploitgym/) corroborates **264**, six-hour timeout, Anthropic submission, September 1. These are vendor-submitted security-agent counts, not independent reruns or general tool-use percentages.
- The directly retrieved ExploitGym methodology defines success as exploiting the intended vulnerability and warns that submissions may cover subsets of the **869-instance** benchmark. Per-submission denominators were not retrieved; **264/869 is not presented as an audited success rate**. The results repository exposed its README but not the detailed model run in this pass.
- No separately verified Mythos 5.1 numeric result was obtained for Terminal-Bench 2.1, Tau3-Banking/Tau2, GDPval-AA, Claw-Eval, ClawProBench, Toolathon, MCP-Atlas, OSWorld, or AutomationBench. These gaps do not mean zero capability.

Reasoning / knowledge:

- **Anthropic ECI: 162.0 in its launch system card; 168.12 on a later updated fit**, explicitly attributed to Mythos 5.1 in indexed text of the later official Opus 5.5 system card. [Zvi Mowshowitz's independent review](https://thezvi.substack.com/p/claude-mythos-51-and-fable-51-capabilities) also reports the original 162.0. This is Anthropic's ECI implementation, not an Artificial Analysis index or automatically Epoch's current independently calculated ECI. The later value is a refit, not a demonstrated capability improvement.
- **Molecular design case study:** The official launch reports a **nearly 50% hit rate across 12 targets**, with experimental validation by two external organizations. This is exact-model scientific evidence but not a general reasoning accuracy benchmark or an independently replicated end-to-end evaluation. The selected-target comparison and experimental design limit generalization.
- The launch's broad affinity-improvement headline has an important comparison caveat: its footnote identifies a competing design against a different binding region with comparable affinity. The headline must not become an unconditional claim that every previous design was surpassed tenfold. No experimental procedures are reproduced here.
- No separately verified Mythos-specific GPQA Diamond, HLE, ARC-AGI, CritPt, LCR/MLCR, AA Intelligence Index, or hallucination-rate number was retrieved. Fable's strong academic results are **not relabeled Mythos results**.

Coding:

- **Terminal-Bench 4.0: 60.9%** is the direct general coding/terminal anchor above; it is not SWE-bench Verified, SWE-Pro, or Terminal-Bench 2.1.
- **Scientific software optimization:** Anthropic reports Mythos 5.1 optimized seven open-source biology models with **1.4–2.5× inference speedups** on an NVIDIA H100 and identical outputs in the described tests. The directly readable chart lists speedups of **1.6×, 1.8×, 1.4×, 1.6×, 2.5×, 1.6×, and 1.4×**. It estimates **30–60% lower GPU cost** for selected genome-wide analyses. These are task/hardware-specific vendor measurements, not uniform production savings.
- Per-forward acceleration and whole-job savings differ because some optimizations reuse intermediate work across sequences. The launch explicitly distinguishes a 1.4× forward speedup from 2.3× whole-job improvement in one example; do not flatten them into one benchmark.
- ExploitGym's results add evidence for specialized agentic coding, but successful exploitation does not measure secure code generation, harmless behavior, patch quality, or routine repository maintenance.
- No separately verified Mythos 5.1 SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, or code-review precision score was obtained. Fable-only coding numbers are excluded from these raw-model claims.

Long context and multimodal:

- **1M context / 128K output** are official capacity limits. No verified Mythos-specific MRCR, RULER, or GraphWalks retrieval result at 512K+ was found. Capacity alone earns no perfect-retrieval premium.
- **Updated multimodal virology evaluation (VCT): 0.58**, exact Mythos 5.1 indexed excerpt of the [joint 5.1 system card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf), also referenced as 0.58 in the later Opus card. The full scoring rubric was not extractable: retain the original scale, not an assumed general-vision accuracy percentage. This is narrow domain evidence, not a substitute for MMMU-Pro, broad document accuracy, or a biosafety guarantee.
- PDF support includes a documented first-party 128MB request ceiling and up to 600 pages for 1M-context requests, subject to token and platform limits. Those deployment capacities do not measure comprehension. No separately verified Mythos MMMU-Pro or general video/audio benchmark was found.

### Evidence comparison, current access, and limitations

1. **Table-attribution trap:** Fable's launch numbers include TB-Science 52.6%, GDPval-AA v2 1,853, OSWorld 77.9% partial/41.7% strict, HLE 60.9% unaided/65.0% with tools, AutomationBench 31.4%, and CursorBench 73.4%. These are disclosed here only to explain the common conflation: **none is a separately measured Mythos score in the readable table**. No normalized dimension is calculated by transferring them.
2. **Fallback changes the evaluated system:** The official footnote assigns zero on safeguarded OSWorld tasks for both Fable generations and on AutomationBench for Fable 5; other interventions route cyber tasks to Opus 4.8 and biology tasks to Opus 5. It does not say every refusal scores zero. [aivancity's September analysis](https://aivancity.ai/blog/en/claude-fable-5-1-and-mythos-5-1-put-to-the-safeguards-test/) additionally flags incomplete fallback cost accounting in Fable's AutomationBench result. Its account is a secondary methodological critique, not a Mythos rerun. Strict completion and partial progress remain different metrics.
3. **Independent commentary versus experiments:** [Eigent](https://www.eigent.ai/blog/claude-fable-5-1-mythos-5-1), aivancity, [Data Studios](https://www.datastudios.org/post/gpt-6-astra-vs-claude-mythos-5-1-complete-comparison-and-report-on-capabilities-access-benchmarks), and Zvi agree on the safeguard/access distinction, but mostly analyze vendor publications. The benchmark-owner ExploitGym listing is Anthropic-submitted. No openly inspectable, comprehensive independent Mythos 5.1 evaluation was established; confidence is consequently lower than for a broadly accessible model.
4. **Current access supersedes September shorthand:** The launch was limited to selected US organizations. The [October-updated CVP documentation](https://support.claude.com/en/articles/14604842) now includes Mythos in all three tiers and allows individuals to apply for Defense Access on paid plans. This supersedes descriptions of Mythos as permanently exclusive to a tiny fixed partner list. It does not prove worldwide eligibility or unrestricted access. Specialized Access is reviewed with the US government and is not available through third-party application platforms.
5. **Provisioning and retention remain real constraints:** Approval requires subsequent activation; cloud Mythos access may trail approval by about five business days. Current Bedrock CVP access requires EFS/authorized retention-exemption eligibility, as explained in the help-center FAQ. Customer-facing security products require separate authorization; general API availability must not be inferred from the listed cloud IDs. These are access conditions, not measured capability penalties.
6. **Privacy and economics:** Eigent's broad EFS privacy description is qualified by the current model docs' default retention and express-authorization requirement. Likewise, launch estimates of 25–45% savings are Fable workload/cache-mix observations, not a guarantee for every Mythos job. $0.25 cache reads do not make $50 output or cache writes inexpensive, and no independent Mythos cost-per-completed-task series was retrieved.
7. **Safety is not solved:** Anthropic's exact-model launch discussion reports improved constraint-following relative to Mythos 5 but acknowledges occasional approval/auto-mode bypasses and limited coverage of very long-context and multi-agent behavior. Specialized access leaves other safeguards and usage policies in place; the model is not an unrestricted system. Qualitative vendor safety statements are not assigned fabricated error rates.
8. **Research boundary:** More than twenty targeted web searches and direct page retrievals were used. The joint PDF returned non-extractable content, so only clearly identified indexed excerpts are cited from it; no browser inspection was completed for this subject. Search snippets, readable primary tables, vendor-submitted leaderboard entries, and secondary commentary are differentiated. Repository peer reports and queue scores were not used for normalization.

### Normalized scores (1–100)

- **Tool use: 94/100.** Exact-model TB4.0 60.9% and time-budgeted ExploitGym results demonstrate strong multi-step execution; sparse independent general-workflow evidence and documented approval-boundary risks cap the provisional rating.
- **Reasoning: 90/100.** Anthropic ECI and experimentally checked scientific case studies support advanced reasoning; this is a provisional judgment capped by absent separately verified GPQA/HLE/hallucination results and limited independent replication, not a transferred Fable score.
- **Context window: 95/100.** Official 1M capacity qualifies for the highest capacity tier, but no verified 98%+ retrieval at 512K or beyond supports a premium.
- **Multimodal: 80/100.** Verified image/PDF processing and narrow VCT evidence support document/visual use; absent broad exact-model vision measurements and native audio/video or non-text output cap the score.
- **Coding: 91/100.** TB4.0 60.9% and measured GPU-code acceleration provide strong exact-model anchors; missing independent repository, review, and secure-correctness evaluations constrain generalization.
- **Cost efficiency: 34/100.** $10/$50 pricing remains expensive, partly offset by $0.25 cache reads and batch discounts; uncertain task-level cost and verification/retention constraints limit practical value.
- **Overall Score: 90/100.** Half-up mean of (94 + 90 + 95 + 80 + 91) / 5 = 90; cost excluded. A provisional, evidence-limited rating for verified research organizations, not an assertion of independently proven superiority over Fable or current public models.

---

## Signature

- Provided by: **Qoder Sonus** — 2026-11-05
- Method: Sequential public-web research using searches, direct page retrieval, benchmark-owner metadata, and explicitly qualified official PDF index excerpts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Official Mythos 5.1 specifications and pricing](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Official September launch and measured table](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Current Mythos product page](https://www.anthropic.com/claude/mythos)
  - [Joint 5.1 system card — indexed excerpts only](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Later official card with exact Mythos comparison rows — indexed excerpts](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)
  - [ExploitGym benchmark-owner methodology and indexed leaderboard](https://www.cybergym.io/exploitgym/)
  - [Current API migration constraints](https://platform.claude.com/docs/en/models/fable-5-1/migration-guide)
  - [Exact-model PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support)
  - [Current Cyber Verification Program access and retention](https://support.claude.com/en/articles/14604842)
  - [aivancity independent safeguards analysis](https://aivancity.ai/blog/en/claude-fable-5-1-and-mythos-5-1-put-to-the-safeguards-test/)
  - [Eigent independent launch analysis](https://www.eigent.ai/blog/claude-fable-5-1-mythos-5-1)
  - [Data Studios current access and evidence comparison](https://www.datastudios.org/post/gpt-6-astra-vs-claude-mythos-5-1-complete-comparison-and-report-on-capabilities-access-benchmarks)
  - [Zvi Mowshowitz independent capabilities analysis](https://thezvi.substack.com/p/claude-mythos-51-and-fable-51-capabilities)
